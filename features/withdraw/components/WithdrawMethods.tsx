"use client";

import React from "react";
import { ChevronRight, Wallet, Search } from "lucide-react";
import { WithdrawMethodType } from "../types";

interface WithdrawMethodsProps {
    onSelect: (method: WithdrawMethodType) => void;
}

export function WithdrawMethods({ onSelect }: WithdrawMethodsProps) {
    return (
        <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <div className="space-y-4">
                <h2 className="text-sm font-semibold text-white">How would you like to withdraw?</h2>


                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search country"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-cheese-yellow/50 transition-all"
                    />
                </div>
            </div>

            <div className="space-y-3">

                <button
                    onClick={() => onSelect("crypto")}
                    className="w-full flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cheese-yellow flex items-center justify-center">
                            <Wallet className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">Crypto</div>
                            <div className="text-zinc-500 text-sm">Withdraw to a wallet or exchange</div>
                        </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-zinc-500" />
                </button>


                <button
                    onClick={() => onSelect("ngn")}
                    className="w-full flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">

                            <div className="flex w-full h-full">
                                <div className="bg-green-600 flex-1"></div>
                                <div className="bg-white flex-1"></div>
                                <div className="bg-green-600 flex-1"></div>
                            </div>
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">Nigeria</div>
                            <div className="text-zinc-500 text-sm uppercase tracking-wider">NGN</div>
                        </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-zinc-500" />
                </button>


                <button
                    onClick={() => onSelect("inr")}
                    className="w-full flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">

                            <div className="flex flex-col w-full h-full">
                                <div className="bg-[#FF9933] flex-1"></div>
                                <div className="bg-white flex-1 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full border border-blue-900"></div>
                                </div>
                                <div className="bg-[#138808] flex-1"></div>
                            </div>
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">India</div>
                            <div className="text-zinc-500 text-sm uppercase tracking-wider">INR</div>
                        </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-zinc-500" />
                </button>
            </div>
        </div>
    );
}
