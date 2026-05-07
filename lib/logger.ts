import { NextResponse } from "next/server";

export type LogLevel = "info" | "warning" | "error" | "critical";

export interface LogEntry {
    level: LogLevel;
    message: string;
    referenceId: string;
    timestamp: string;
    route?: string;
    userId?: string;
    payload?: any;
    stack?: string; // Only populated on the server
}

/**
 * Generates a unique reference ID for tracking errors across systems.
 */
export function generateReferenceId(): string {
    return `ERR-${Math.random().toString(36).substring(2, 9).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
}

/**
 * Strips sensitive data (passwords, tokens) from payloads before logging.
 */
function sanitizePayload(payload: any): any {
    if (!payload) return payload;

    if (typeof payload !== "object") return payload;

    const sanitized = { ...payload };
    const sensitiveKeys = ["password", "token", "secret", "authorization", "credit_card", "cvv"];

    Object.keys(sanitized).forEach((key) => {
        if (sensitiveKeys.some(sensitiveKey => key.toLowerCase().includes(sensitiveKey))) {
            sanitized[key] = "[REDACTED]";
        } else if (typeof sanitized[key] === "object") {
            sanitized[key] = sanitizePayload(sanitized[key]); // Recursive sanitization
        }
    });

    return sanitized;
}

/**
 * Centralized logging utility.
 * In a real production environment, this would forward to Datadog, Sentry, AWS CloudWatch, etc.
 */
export const logger = {
    log: (level: LogLevel, message: string, options?: Omit<Partial<LogEntry>, "level" | "message" | "timestamp">) => {
        const isServer = typeof window === "undefined";
        const timestamp = new Date().toISOString();
        const referenceId = options?.referenceId || generateReferenceId();

        const logEntry: LogEntry = {
            level,
            message,
            referenceId,
            timestamp,
            route: options?.route,
            userId: options?.userId,
            payload: sanitizePayload(options?.payload),
        };

        // Only attach stack traces if we are running securely on the server
        if (isServer && level !== "info" && level !== "warning") {
            const error = new Error();
            logEntry.stack = options?.stack || error.stack;
        }

        // Format log for console (In production, replace this with an external service poster)
        const logString = JSON.stringify(logEntry);

        switch (level) {
            case "info":
                console.info(`[${timestamp}] INFO: ${message}`, logString);
                break;
            case "warning":
                console.warn(`[${timestamp}] WARN: ${message}`, logString);
                break;
            case "error":
                console.error(`[${timestamp}] ERROR [${referenceId}]: ${message}`, logString);
                break;
            case "critical":
                console.error(`[${timestamp}] CRITICAL [${referenceId}]: ${message}`, logString);
                break;
        }

        return referenceId;
    },

    info: (message: string, options?: Omit<Partial<LogEntry>, "level" | "message" | "timestamp">) => logger.log("info", message, options),
    warn: (message: string, options?: Omit<Partial<LogEntry>, "level" | "message" | "timestamp">) => logger.log("warning", message, options),
    error: (message: string, options?: Omit<Partial<LogEntry>, "level" | "message" | "timestamp">) => logger.log("error", message, options),
    critical: (message: string, options?: Omit<Partial<LogEntry>, "level" | "message" | "timestamp">) => logger.log("critical", message, options),
};
