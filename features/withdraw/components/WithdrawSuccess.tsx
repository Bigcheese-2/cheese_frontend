"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheeseMascot } from "../../auth/components/CheeseMascot";

interface WithdrawSuccessProps {
    amount: string;
    address: string;
    onClose: () => void;
}

export function WithdrawSuccess({ amount, address, onClose }: WithdrawSuccessProps) {
    // Truncate address for display
    const truncatedAddress = address.length > 20
        ? `${address.slice(0, 6)}....${address.slice(-6)}`
        : address;

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 animate-in zoom-in duration-500">
            <div className="relative">
                {/* Celebration Stars simulation using absolute elements if needed, 
            but for now we use the success variant of CheeseMascot */}
                <CheeseMascot variant="success" className="w-64 h-64" />
            </div>

            <div className="w-full max-w-sm bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                </div>

                <div className="space-y-1">
                    <div className="text-zinc-400 text-sm">You just withdrew</div>
                    <div className="text-white font-bold text-2xl">${amount}</div>
                    <div className="text-zinc-500 text-sm font-mono mt-2">to {truncatedAddress}</div>
                </div>
            </div>

            <Button
                onClick={onClose}
                className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 transition-all text-lg"
            >
                Back to Home
            </Button>
        </div>
    );
}
