"use client";

import React from "react";
import { BackButton } from "@/components/ui/BackButton";

interface TopNavProps {
    title?: string;
    onBack: () => void;
    rightElement?: React.ReactNode;
}

export function TopNav({ title, onBack, rightElement }: TopNavProps) {
    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-20 bg-black/60 backdrop-blur-xl z-60 px-6 flex items-center justify-between border-x border-x-zinc-900 border-b border-b-white/5">
            <BackButton onClick={onBack} />

            {title && (
                <h1 className="absolute inset-0 flex items-center justify-center text-lg font-bold pointer-events-none">
                    {title}
                </h1>
            )}

            <div className="z-10">
                {rightElement || <div className="w-9" />}
            </div>
        </header>
    );
}
