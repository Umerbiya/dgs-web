import { NextResponse } from "next/server";
import { logger } from "./logger";

// Standardizing error codes across the API layer
export type ApiErrorCode =
    | "BAD_REQUEST"
    | "UNAUTHORIZED"
    | "FORBIDDEN"
    | "NOT_FOUND"
    | "METHOD_NOT_ALLOWED"
    | "TOO_MANY_REQUESTS"
    | "INTERNAL_SERVER_ERROR"
    | "SERVICE_UNAVAILABLE"
    | "GATEWAY_TIMEOUT";

export interface ApiErrorResponse {
    success: false;
    error: {
        code: ApiErrorCode;
        message: string;
        details: any | null;
        reference_id: string;
    };
}

/**
 * Standard utility for formatting and logging API error responses.
 * Ensures that sensitive info NEVER leaks to the client, but gets logged securely on the backend.
 *
 * @param req - The inbound standard Request object
 * @param error - The actual error caught in the try/catch
 * @param statusCode - HTTP Status code (default: 500)
 * @param errorCode - Specific logical Error Code
 * @param customMessage - A friendly message to overwrite technical errors for user consumption
 * @param details - Any safe, non-sensitive object details to pass to the client
 */
export async function formatApiError(
    req: Request,
    error: any,
    statusCode: number = 500,
    errorCode: ApiErrorCode = "INTERNAL_SERVER_ERROR",
    customMessage?: string,
    details: any = null
): Promise<NextResponse<ApiErrorResponse>> {

    const endpoint = new URL(req.url).pathname;

    // Determine an appropriate user-facing message.
    // CRITICAL: We do not pass `error.message` to the client if it's a 500 to prevent technical leakage.
    let safeMessage = customMessage || "An unexpected error occurred. Please try again later.";

    if (statusCode < 500 && !customMessage && error.message) {
        // 4xx errors are usually safe validation errors, but we still prefer explicit customMessages
        safeMessage = error.message;
    }

    // Generate Reference ID and securely log the full technical crash
    const referenceId = logger.log(statusCode >= 500 ? "error" : "warning", "API Request Failed", {
        route: endpoint,
        payload: {
            errorParams: { statusCode, errorCode },
            rawErrorMsg: error?.message || "Unknown Error",
            rawErrorName: error?.name,
        },
        stack: error?.stack,
    });

    // Construct structured response for the client
    const clientResponse: ApiErrorResponse = {
        success: false,
        error: {
            code: errorCode,
            message: safeMessage,
            details,
            reference_id: referenceId,
        },
    };

    return NextResponse.json(clientResponse, { status: statusCode });
}

/**
 * Wrapper for easy robust API route creation with 500-level safety nets
 */
export function withApiErrorHandler(
    handler: (req: Request, ...args: any[]) => Promise<NextResponse>
) {
    return async (req: Request, ...args: any[]) => {
        try {
            return await handler(req, ...args);
        } catch (error: any) {
            // Unexpected unhandled API panics
            return formatApiError(req, error, 500, "INTERNAL_SERVER_ERROR");
        }
    };
}
