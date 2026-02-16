"use client";

import React from "react";
import { Wallet } from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/button";

interface WithdrawReviewProps {
    amount: string;
    token: string;
    network: string;
    address: string;
    onWithdraw: () => void;
    onBack: () => void;
}

export function WithdrawReview({
    amount,
    token,
    network,
    address,
    onWithdraw,
    onBack,
}: WithdrawReviewProps) {
    // Truncate address for display: 0x601e....f35267
    const truncatedAddress = address.length > 20
        ? `${address.slice(0, 6)}....${address.slice(-6)}`
        : address;

    return (
        <div className="flex flex-col h-full space-y-6 animate-in slide-in-from-right duration-500">
            <div className="space-y-4">

                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cheese-yellow flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-black" />
                    </div>
                    <div>
                        <div className="text-zinc-400 text-xs">You're withdrawing</div>
                        <div className="text-white font-bold text-lg">${amount}</div>
                    </div>
                </div>


                <div className="bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-6 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">Token and network</label>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#2775CA] flex items-center justify-center text-white font-bold text-[10px] italic">
                                    $
                                </div>
                                <div className="text-white font-semibold">{token} on {network}</div>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-zinc-800/50 space-y-1">
                            <label className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">To</label>
                            <div className="text-white font-bold font-mono text-sm tracking-tight">{truncatedAddress}</div>
                        </div>

                        <div className="pt-2 border-t border-zinc-800/50 space-y-1">
                            <label className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">Max network fee</label>
                            <div className="text-emerald-400 font-bold">Sponsored by Cheese!</div>
                        </div>

                        <div className="pt-2 border-t border-zinc-800/50 space-y-1">
                            <label className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">Cheese fee</label>
                            <div className="text-white font-bold">$0.00</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-end pb-4">
                <Button
                    onClick={onWithdraw}
                    className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 active:scale-95 text-xl"
                >
                    Withdraw
                </Button>
            </div>
        </div>
    );
}
