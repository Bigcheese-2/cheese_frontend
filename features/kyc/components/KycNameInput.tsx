"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";

interface KycNameInputProps {
    firstName: string;
    lastName: string;
    onChange: (data: { firstName?: string; lastName?: string }) => void;
    onNext: () => void;
}

export function KycNameInput({ firstName, lastName, onChange, onNext }: KycNameInputProps) {
    const isComplete = firstName.trim() !== "" && lastName.trim() !== "";

    return (
        <div className="flex flex-col flex-1">
            <div className="space-y-2 mb-8">
                <h2 className="text-2xl font-display text-white">
                    Name on ID
                </h2>
                <p className="text-zinc-400 text-sm">
                    Please provide your name exactly as it appears on your document
                </p>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-zinc-400 ml-1">First name</label>
                    <Input
                        id="firstName"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => onChange({ firstName: e.target.value })}
                        className="w-full h-14 bg-input-bg border-zinc-800 rounded-lg text-white focus:ring-cheese-yellow"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-zinc-400 ml-1">Last name</label>
                    <Input
                        id="lastName"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => onChange({ lastName: e.target.value })}
                        className="w-full h-14 bg-input-bg border-zinc-800 rounded-lg text-white focus:ring-cheese-yellow"
                    />
                </div>
            </div>

            <div className="mt-auto pb-6 space-y-6">
                <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                    <ShieldCheck className="w-5 h-5 text-cheese-yellow shrink-0" />
                    <p className="text-xs text-zinc-500 leading-relaxed">
                        Security verification ensures your profile is yours and helps keep your account safe.
                    </p>
                </div>
                <Button
                    onClick={onNext}
                    disabled={!isComplete}
                    className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 transition-all active:scale-95 text-lg disabled:opacity-50 disabled:active:scale-100"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
