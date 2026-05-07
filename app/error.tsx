"use client"; // Error boundaries must be Client Components

import { useEffect, useState } from "react";
import { ErrorPage } from "@/components/ui/error-page";
import { logger, generateReferenceId } from "@/lib/logger";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [referenceId, setReferenceId] = useState<string>("");

    useEffect(() => {
        // Generate a secure reference ID to show to the user
        // The actual stack trace is logged on the server environment entirely invisibly
        const refId = generateReferenceId();
        setReferenceId(refId);

        // If we're in a browser environment, we log the crash to our centralized logger
        // Note: Next.js standard `error.digest` is also logged as an identifier if it exists
        logger.error("Client-side unhandled exception caught by global ErrorBoundary", {
            referenceId: refId,
            stack: error.stack,
            payload: {
                digest: error.digest,
                message: error.message,
                name: error.name
            },
            route: window.location.pathname
        });

    }, [error]);

    return (
        <ErrorPage
            statusCode={500}
            title="System Availability Interruption"
            description="We're currently experiencing a temporary processing issue. Our engineering team has been automatically notified and is investigating."
            referenceId={referenceId}
            onRetry={() => {
                // Log the retry attempt
                logger.info("User initiated automatic recovery retry", { referenceId });
                // Attempt to recover by trying to re-render the segment
                reset();
            }}
        />
    );
}
