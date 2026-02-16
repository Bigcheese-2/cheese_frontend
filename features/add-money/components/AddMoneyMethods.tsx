"use client";

import React, { useState } from "react";
import { ChevronRight, Wallet, Landmark } from "lucide-react";
import { DepositMethodSelector } from "./DepositMethodSelector";

interface AddMoneyMethodsProps {
    onSelectCrypto: () => void;
}

export function AddMoneyMethods({ onSelectCrypto }: AddMoneyMethodsProps) {
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    return (
        <div className="space-y-8 animate-in slide-in-from-right duration-500">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                Add Money via
            </h2>

            <div className="space-y-4">

                <div
                    onClick={() => setIsSelectorOpen(true)}
                    className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cheese-yellow flex items-center justify-center">
                            <Wallet className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">From Crypto</div>
                            <div className="text-zinc-500 text-sm">Usually arrives instantly</div>
                        </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-zinc-500" />
                </div>


                <div
                    className="flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800 rounded-3xl opacity-60 cursor-not-allowed"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                            <Landmark className="w-6 h-6 text-zinc-500" />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">From Bank</div>
                            <div className="text-zinc-500 text-sm">Usually in minutes - KYC required</div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 px-3 py-1 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                        Soon!
                    </div>
                </div>
            </div>


            <DepositMethodSelector
                isOpen={isSelectorOpen}
                onClose={() => setIsSelectorOpen(false)}
                onConfirm={onSelectCrypto}
            />
        </div>
    );
}
