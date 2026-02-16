"use client";

import React from "react";
import { X, Wallet, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WithdrawCryptoFlowProps {
    amount: string;
    token: string;
    network: string;
    address: string;
    onAddressChange: (address: string) => void;
    onReview: () => void;
    onSelectToken: () => void;
}

export function WithdrawCryptoFlow({
    amount,
    token,
    network,
    address,
    onAddressChange,
    onReview,
    onSelectToken,
}: WithdrawCryptoFlowProps) {
    return (
        <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <div className="space-y-3">

                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cheese-yellow flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-black" />
                    </div>
                    <div>
                        <div className="text-zinc-400 text-xs">You're withdrawing</div>
                        <div className="text-white font-bold text-lg">${amount}</div>
                    </div>
                </div>


                <button
                    onClick={onSelectToken}
                    className="w-full p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center justify-between active:scale-[0.98] transition-all"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">

                            <div className="w-full h-full bg-[#2775CA] flex items-center justify-center text-white font-bold text-xs italic">
                                $
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="text-white font-bold">
                                {token} <span className="text-zinc-500 font-normal">on {network}</span>
                            </div>
                            <div className="text-zinc-500 text-xs">No fees with this token.</div>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-500" />
                </button>
            </div>

            <div className="space-y-4">
                <label className="text-white font-semibold block text-sm">Wallet address</label>
                <div className="relative">
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => onAddressChange(e.target.value)}
                        placeholder="Enter an address or ENS"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-4 pl-4 pr-12 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-cheese-yellow/50 transition-all font-mono text-sm"
                    />
                    {address && (
                        <button
                            onClick={() => onAddressChange("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            <div className="pt-4">
                <Button
                    onClick={onReview}
                    disabled={!address}
                    className={`w-full h-16 rounded-[32px] font-bold text-lg transition-all ${address
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-zinc-900/50 text-zinc-600 cursor-not-allowed border border-zinc-800"
                        }`}
                >
                    Review
                </Button>
            </div>
        </div>
    );
}
