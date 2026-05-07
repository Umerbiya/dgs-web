"use client";

import { ErrorPage } from "@/components/ui/error-page";

export default function NotFound() {
    return (
        <ErrorPage
            statusCode={404}
            title="Page Not Found"
            description="The page you are looking for doesn't exist or has been moved. Let's get you back on track."
            showHomeButton={true}
        />
    );
}
