"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface KycDocumentTypeProps {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}

export function KycDocumentType({ value, onChange, onNext }: KycDocumentTypeProps) {
    const options = [
        "National ID Card",
        "National Passport",
    ];

    return (
        <div className="flex flex-col flex-1">
            <div className="space-y-2 mb-8">
                <h2 className="text-2xl font-display text-white">
                    Pick an original document to upload
                </h2>
                <p className="text-zinc-400 text-sm">
                    Ensure your document is original and not a photocopy
                </p>
            </div>

            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => onChange(option)}
                        className={cn(
                            "w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-200",
                            value === option
                                ? "bg-zinc-900 border-cheese-yellow"
                                : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                        )}
                    >
                        <span className="text-lg font-medium text-white">{option}</span>
                        <div className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                            value === option
                                ? "border-cheese-yellow bg-cheese-yellow"
                                : "border-zinc-700"
                        )}>
                            {value === option && <Check className="w-4 h-4 text-black stroke-[3px]" />}
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-auto pb-6">
                <Button
                    onClick={onNext}
                    className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 transition-all active:scale-95 text-lg"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
