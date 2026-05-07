"use client";

// global-error.tsx must include html and body tags because it wraps the root layout itself 
// if an error occurs within layout.tsx or its direct children.
import { ErrorPage } from "@/components/ui/error-page";
import { useEffect, useState } from "react";
import { logger, generateReferenceId } from "@/lib/logger";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [referenceId, setReferenceId] = useState<string>("");

    useEffect(() => {
        const refId = generateReferenceId();
        setReferenceId(refId);

        logger.critical("Critical root layout crash caught by GlobalError", {
            referenceId: refId,
            stack: error.stack,
            payload: {
                digest: error.digest,
                message: error.message,
                name: error.name
            }
        });
    }, [error]);

    return (
        <html lang="en">
            <body className="antialiased bg-background">
                <ErrorPage
                    statusCode={500}
                    title="Critical System Error"
                    description="The application encountered an unexpected fatal error during rendering. We apologize for the interruption."
                    referenceId={referenceId}
                    onRetry={() => {
                        logger.info("User initiated full app reload from GlobalError", { referenceId });
                        reset();
                    }}
                />
            </body>
        </html>
    );
}
