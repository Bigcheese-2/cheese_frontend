"use client";

import React from "react";
import { ChevronRight, Plus } from "lucide-react";

interface AddMoneyOverviewProps {
    onSelectNew: () => void;
}

export function AddMoneyOverview({ onSelectNew }: AddMoneyOverviewProps) {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                    Recent methods
                </h2>


                <div className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700">

                            <div className="flex w-full h-full">
                                <div className="bg-[#008751] flex-1"></div>
                                <div className="bg-white flex-1"></div>
                                <div className="bg-[#008751] flex-1"></div>
                            </div>
                        </div>
                        <div>
                            <div className="text-white font-semibold">Nigeria</div>
                            <div className="text-zinc-500 text-xs uppercase">NGN</div>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-500" />
                </div>
            </div>

            <div className="flex items-center gap-4 py-4">
                <div className="flex-1 h-px bg-zinc-800"></div>
                <span className="text-zinc-500 text-xs font-medium">or</span>
                <div className="flex-1 h-px bg-zinc-800"></div>
            </div>

            <button
                onClick={onSelectNew}
                className="w-full flex items-center justify-center gap-2 p-5 bg-transparent border border-zinc-800 rounded-3xl text-white font-semibold hover:bg-zinc-900 active:scale-[0.98] transition-all"
            >
                <Plus className="w-5 h-5" />
                Select new method
            </button>
        </div>
    );
}
