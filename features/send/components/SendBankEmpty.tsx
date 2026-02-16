"use client";

import React from "react";
import { AlertTriangle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SendBankEmpty({ onAddMoney }: { onAddMoney: () => void }) {
    return (
        <div className="flex items-center justify-center min-h-[60vh] p-6 animate-in fade-in zoom-in duration-500">
            <div className="w-full max-w-sm bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-[40px] p-8 flex flex-col items-center text-center space-y-6 shadow-2xl relative overflow-hidden">

                <div className="absolute top-0 right-0 w-24 h-24 bg-cheese-yellow/5 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cheese-yellow/5 blur-3xl rounded-full"></div>

                <div className="w-16 h-16 rounded-full bg-cheese-yellow/10 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                    <AlertTriangle className="w-8 h-8 text-cheese-yellow" />
                </div>

                <div className="space-y-3">
                    <h3 className="text-white font-bold text-2xl tracking-tight">No accounts yet</h3>
                    <p className="text-zinc-400 text-base leading-relaxed">
                        Add your account details once to withdraw in one tap.
                    </p>
                </div>

                <Button
                    onClick={onAddMoney}
                    className="w-full h-16 bg-white hover:bg-zinc-200 text-black font-bold rounded-[32px] transition-all flex items-center justify-center gap-2 group text-lg"
                >
                    <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    Add money
                </Button>
            </div>
        </div>
    );
}
