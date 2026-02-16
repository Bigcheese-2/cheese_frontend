import React from "react";

/**
 * AuthLayout component
 * 
 * Shared layout for all auth-related screens.
 * Ensures a consistent dark theme and centered mobile-first layout.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col min-h-dvh bg-black text-white p-6 animate-in fade-in duration-700">
            {children}
        </main>
    );
}
