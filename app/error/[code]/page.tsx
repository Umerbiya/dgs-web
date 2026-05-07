"use client";

import { ErrorPage } from "@/components/ui/error-page";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { generateReferenceId } from "@/lib/logger";

interface ErrorConfig {
    title: string;
    description: string;
    showSupport?: boolean;
}

const ERROR_CONFIGS: Record<string, ErrorConfig> = {
    "400": {
        title: "Bad Request",
        description: "We couldn't process your request because the information provided was invalid or incomplete. Please check your input and try again.",
    },
    "401": {
        title: "Unauthorized Access",
        description: "You need to be logged in to access this page. Please sign in with your credentials to continue.",
    },
    "403": {
        title: "Access Forbidden",
        description: "You don't have permission to view this content or perform this action. If you believe this is a mistake, please contact support.",
        showSupport: true,
    },
    "408": {
        title: "Request Timeout",
        description: "The server took too long to respond. This might be due to a temporary network issue or heavy load. Please try again shortly.",
    },
    "429": {
        title: "Too Many Requests",
        description: "You've made too many requests in a short period. Please wait a moment before trying again to help us maintain service quality.",
    },
    "502": {
        title: "Bad Gateway",
        description: "We received an invalid response from an upstream server. Our team has been notified and is investigating the connection issue.",
        showSupport: true,
    },
    "503": {
        title: "Service Unavailable",
        description: "The service is temporarily unavailable, likely due to planned maintenance or an unexpected overload. We expect to be back online shortly.",
    },
};

export default function GenericErrorRoute() {
    const params = useParams();
    const searchParams = useSearchParams();
    const [referenceId, setReferenceId] = useState("");

    const codeStr = typeof params?.code === "string" ? params.code : "500";
    const errorCode = parseInt(codeStr, 10);

    // Provide 500 fallback if the code isn't explicitly configured in our dictionary
    const config = ERROR_CONFIGS[codeStr] || {
        title: "Unexpected Error",
        description: "Something went wrong on our end while processing your request. Please try again later.",
        showSupport: true,
    };

    useEffect(() => {
        // Check if the route provided a reference ID in the query params from a backend redirect
        const passedRef = searchParams?.get("ref");
        setReferenceId(passedRef || generateReferenceId());
    }, [searchParams]);

    return (
        <ErrorPage
            statusCode={isNaN(errorCode) ? 500 : errorCode}
            title={config.title}
            description={config.description}
            referenceId={referenceId}
        />
    );
}
