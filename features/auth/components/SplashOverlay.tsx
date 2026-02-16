"use client";

import { useEffect, useState } from "react";
import { CheeseMascot } from "./CheeseMascot";

interface SplashOverlayProps {
    onComplete: () => void;
}

export function SplashOverlay({ onComplete }: SplashOverlayProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Wait for fade out animation
            setTimeout(onComplete, 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-9999 bg-black flex items-center justify-center transition-opacity duration-500 overflow-hidden ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className={`w-full max-w-[480px] h-full bg-black flex flex-col items-center justify-center p-6 animate-in zoom-in spin-in-1 duration-1000 ease-out border-x border-zinc-900`}>
                <CheeseMascot variant="splash" priority />
            </div>
        </div>
    );
}
