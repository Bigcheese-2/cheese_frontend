"use client";

import React from "react";
import { Link2, Users, Landmark, Wallet, ChevronRight } from "lucide-react";
import { SendMethodType } from "../types";
import { Button } from "@/components/ui/button";

interface SendMethodsProps {
    onSelect: (method: SendMethodType) => void;
}

export function SendMethods({ onSelect }: SendMethodsProps) {
    return (
        <div className="space-y-8 animate-in slide-in-from-right duration-500">

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-cheese-yellow flex items-center justify-center">
                    <Link2 className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-1">
                    <h3 className="text-white font-bold text-lg">Send money with a link</h3>
                    <p className="text-zinc-500 text-sm">No account needed to receive</p>
                </div>
                <Button
                    onClick={() => onSelect("link")}
                    className="w-full h-14 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 transition-all text-base flex items-center justify-center gap-2"
                >
                    <Link2 className="w-5 h-5 font-bold" />
                    Send Via link
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-zinc-800"></div>
                <span className="text-zinc-500 text-xs font-medium uppercase">or</span>
                <div className="flex-1 h-px bg-zinc-800"></div>
            </div>

            <div className="space-y-3">

                <button
                    onClick={() => onSelect("contacts")}
                    className="w-full flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cheese-yellow flex items-center justify-center">
                            <Users className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">Cheese contacts</div>
                            <div className="text-zinc-500 text-sm">Cheese you've interacted with</div>
                        </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-zinc-500" />
                </button>


                <button
                    onClick={() => onSelect("bank")}
                    className="w-full flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <Landmark className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">Bank</div>
                            <div className="text-zinc-500 text-sm">Send to merchant banks</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-800">
                            <div className="flex w-full h-full">
                                <div className="bg-[#008751] flex-1"></div>
                                <div className="bg-white flex-1"></div>
                                <div className="bg-[#008751] flex-1"></div>
                            </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-zinc-500" />
                    </div>
                </button>


                <button
                    onClick={() => onSelect("wallet")}
                    className="w-full flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cheese-yellow flex items-center justify-center">
                            <Wallet className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">Exchange or Wallet</div>
                            <div className="text-zinc-500 text-sm">Binance, Metamask and more</div>
                        </div>
                    </div>
                    <div className="flex items-center -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-[#F3BA2F] border border-zinc-800 flex items-center justify-center text-[8px] font-bold">B</div>
                        <div className="w-6 h-6 rounded-full bg-[#161616] border border-zinc-800 flex items-center justify-center text-[8px] font-bold text-cheese-yellow">$</div>
                        <div className="w-6 h-6 rounded-full bg-[#E2761B] border border-zinc-800 flex items-center justify-center text-[8px] font-bold">M</div>
                    </div>
                </button>
            </div>
        </div>
    );
}
