"use client";

import { useState } from "react";
import { Eye, EyeOff, ChevronDown, } from "lucide-react";

export function BalanceCard() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="px-6 mb-8">
            <div className="  rounded-3xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-zinc-500 text-sm font-medium">My Balance</span>
                        <button
                            onClick={() => setIsVisible(!isVisible)}
                            className="text-zinc-500 hover:text-white transition-colors"
                        >
                            {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </button>
                    </div>
                    <button className="flex items-center gap-1.5 bg-[#595959] px-2.5 py-1.5 rounded-md text-xs font-semibold text-white border border-zinc-800/50">
                        <div className="w-4 h-2.5 rounded-[2px] bg-green-600 flex overflow-hidden">
                            <div className="w-1/3 bg-[#008751] h-full" />
                            <div className="w-1/3 bg-white h-full" />
                            <div className="w-1/3 bg-[#008751] h-full" />
                        </div>
                        NGN <ChevronDown className="w-3 h-3 text-white" />
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <img src="/images/balance-img.svg" alt="coin" className="w-8 h-8" />
                    <span className="text-white text-[32px] font-bold tracking-tight font-display">
                        {isVisible ? "$8,269" : "••••••••"}
                        {isVisible && <span className="text-[22px] text-zinc-400 font-medium tracking-normal">.00</span>}
                    </span>
                </div>
            </div>
        </div>
    );
}
