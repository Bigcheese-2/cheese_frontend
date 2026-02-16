"use client";

import React from "react";
import { AlertTriangle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WithdrawAccountEmptyProps {
    onAddAccount: () => void;
}

export function WithdrawAccountEmpty({ onAddAccount }: WithdrawAccountEmptyProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-8 py-12 animate-in fade-in duration-500">
            <div className="w-full max-w-sm bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-8 space-y-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-cheese-yellow/10 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-cheese-yellow" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">No accounts yet</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                        Add your account details once to withdraw in one tap
                    </p>
                </div>

                <Button
                    onClick={onAddAccount}
                    className="w-full h-14 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 transition-all text-base flex items-center justify-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Add Account
                </Button>
            </div>
        </div>
    );
}
