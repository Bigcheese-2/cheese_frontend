"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
    progress: number; // 0 to 100
    className?: string;
    barClassName?: string;
}

export function ProgressBar({
    progress,
    className,
    barClassName,
}: ProgressBarProps) {
    return (
        <div className={cn("w-full h-2 bg-zinc-800 rounded-full overflow-hidden", className)}>
            <div
                className={cn("h-full bg-[#FFD411] rounded-full transition-all duration-500 ease-out", barClassName)}
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
        </div>
    );
}
