"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface KycCountrySelectionProps {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}

export function KycCountrySelection({ value, onChange, onNext }: KycCountrySelectionProps) {
    return (
        <div className="flex flex-col flex-1">
            <div className="space-y-2 mb-8">
                <h2 className="text-2xl font-display text-white">
                    Country of residence
                </h2>
                <p className="text-zinc-400 text-sm">
                    Please select your country of residence
                </p>
            </div>

            <div className="space-y-4">
                <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full h-14 bg-input-bg border-zinc-800 rounded-lg text-white focus:ring-cheese-yellow">
                        <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                        <SelectItem value="Ghana">Ghana</SelectItem>
                        <SelectItem value="Kenya">Kenya</SelectItem>
                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                        <SelectItem value="United States">United States</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-auto pb-6 space-y-6">
                <p className="text-[13px] text-zinc-400 text-center leading-relaxed">
                    By entering your email address and tapping send. you agree to the <span className="font-bold underline text-white cursor-pointer">Privacy Policy</span>
                </p>
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
