"use client";

import { useEffect, useState } from "react";
import { SplashOverlay } from "@/features/auth/components/SplashOverlay";

export function InitialLoadProvider({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const hasShownSplash = sessionStorage.getItem("hasShownSplash");
        if (!hasShownSplash) {
            setShowSplash(true);
        }
        setIsInitialized(true);
    }, []);

    const handleSplashComplete = () => {
        sessionStorage.setItem("hasShownSplash", "true");
        setShowSplash(false);
    };

    if (!isInitialized) {
        return <div className="bg-black min-h-screen" />;
    }

    return (
        <>
            {showSplash && <SplashOverlay onComplete={handleSplashComplete} />}
            {children}
        </>
    );
}
