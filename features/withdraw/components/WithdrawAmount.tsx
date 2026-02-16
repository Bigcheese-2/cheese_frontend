"use client";

import React from "react";
import { MoveLeft, Delete } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WithdrawAmountProps {
    amount: string;
    balance: string;
    onAmountChange: (amount: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export function WithdrawAmount({
    amount,
    balance,
    onAmountChange,
    onNext,
    onBack,
}: WithdrawAmountProps) {
    const handleNumberClick = (num: string) => {
        if (amount === "0.00" || amount === "0") {
            onAmountChange(num);
        } else {
            onAmountChange(amount + num);
        }
    };

    const handleDelete = () => {
        if (amount.length <= 1) {
            onAmountChange("0");
        } else {
            onAmountChange(amount.slice(0, -1));
        }
    };

    const handleDot = () => {
        if (!amount.includes(".")) {
            onAmountChange(amount + ".");
        }
    };

    const keypad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];

    return (
        <div className="flex flex-col h-full space-y-8 animate-in slide-in-from-right duration-500">
            <div className="space-y-2">
                <h2 className="text-sm font-semibold text-white">Amount to withdraw</h2>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center space-y-1">
                    <div className="text-4xl font-bold text-white">${amount}</div>
                    <div className="text-zinc-500 text-sm">Balance: ${balance}</div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-end pb-8">
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {keypad.map((key) => (
                        <button
                            key={key}
                            onClick={() => (key === "." ? handleDot() : handleNumberClick(key))}
                            className="h-16 flex items-center justify-center text-2xl font-semibold text-white bg-zinc-900/50 rounded-2xl active:bg-zinc-800 transition-colors"
                        >
                            {key}
                        </button>
                    ))}
                    <button
                        onClick={handleDelete}
                        className="h-16 flex items-center justify-center text-white bg-zinc-900/50 rounded-2xl active:bg-zinc-800 transition-colors"
                    >
                        <Delete className="w-6 h-6" />
                    </button>
                </div>

                <Button
                    onClick={onNext}
                    disabled={parseFloat(amount) <= 0}
                    className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 active:scale-95 text-lg"
                >
                    Add Money
                </Button>
            </div>
        </div>
    );
}
