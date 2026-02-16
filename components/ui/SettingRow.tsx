"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingRowProps {
    icon?: React.ReactNode;
    label: string;
    value?: string;
    showChevron?: boolean;
    onClick?: () => void;
    className?: string;
    rightElement?: React.ReactNode;
}

export function SettingRow({
    icon,
    label,
    value,
    showChevron = true,
    onClick,
    className,
    rightElement,
}: SettingRowProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "flex items-center justify-between py-4 px-1 cursor-pointer active:opacity-70 transition-opacity",
                className
            )}
        >
            <div className="flex items-center gap-4">
                {icon && <div className="text-white">{icon}</div>}
                <span className="text-white text-base font-medium">{label}</span>
            </div>

            <div className="flex items-center gap-2">
                {value && <span className="text-zinc-500 text-sm">{value}</span>}
                {rightElement}
                {showChevron && <ChevronRight className="w-5 h-5 text-zinc-600" />}
            </div>
        </div>
    );
}
