"use client";

import React from "react";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/button";

interface SendWalletAmountProps {
    amount: string;
    balance: string;
    onAmountChange: (amount: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export function SendWalletAmount({
    amount,
    balance,
    onAmountChange,
    onNext,
    onBack,
}: SendWalletAmountProps) {
    return (
        <div className="flex flex-col h-full space-y-6 animate-in slide-in-from-right duration-500">
            <div className="flex items-center -ml-2">
                <BackButton onClick={onBack} />
            </div>
            <div className="space-y-4 pt-4">
                <label className="text-white font-bold text-lg px-2">Amount to send</label>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-10 flex flex-col items-center justify-center space-y-2">
                    <div className="text-5xl font-bold text-white">${amount === "0" ? "0.00" : amount}</div>
                    <div className="text-zinc-500 text-base">Balance: ${balance}</div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-end pb-8">
                <Button
                    onClick={onNext}
                    disabled={parseFloat(amount) <= 0}
                    className="w-full h-16 bg-zinc-800 text-zinc-500 hover:text-white font-bold rounded-[32px] hover:bg-zinc-700 active:scale-95 text-xl transition-all"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
