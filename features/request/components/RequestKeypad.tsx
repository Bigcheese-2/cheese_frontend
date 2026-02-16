"use client";

import React from "react";
import { Delete } from "lucide-react";

interface RequestKeypadProps {
    onPress: (key: string) => void;
    onDelete: () => void;
}

export function RequestKeypad({ onPress, onDelete }: RequestKeypadProps) {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];

    return (
        <div className="grid grid-cols-3 gap-4">
            {keys.map((key) => (
                <button
                    key={key}
                    onClick={() => onPress(key)}
                    className="h-14 flex items-center justify-center text-2xl font-semibold text-white bg-zinc-900/30 rounded-2xl active:bg-zinc-800 transition-colors"
                >
                    {key}
                </button>
            ))}
            <button
                onClick={onDelete}
                className="h-14 flex items-center justify-center text-white bg-zinc-900/30 rounded-2xl active:bg-zinc-800 transition-colors"
            >
                <Delete className="w-6 h-6" />
            </button>
        </div>
    );
}
