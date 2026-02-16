"use client";

import React from "react";
import { Delete, Link2, Plus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SendLinkFlowProps {
    amount: string;
    balance: string;
    comment: string;
    onAmountChange: (amount: string) => void;
    onCommentChange: (comment: string) => void;
    onSend: () => void;
}

export function SendLinkFlow({
    amount,
    balance,
    comment,
    onAmountChange,
    onCommentChange,
    onSend,
}: SendLinkFlowProps) {
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
        <div className="flex flex-col h-full space-y-6 animate-in slide-in-from-right duration-500">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-600/20 text-green-500 flex items-center justify-center shrink-0 mt-1">
                    <Link2 className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                    <div className="space-y-1">
                        <h4 className="text-white font-bold text-base">Create a payment link</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">Anyone with the link can receive the money</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center border-2 border-zinc-900">
                                <MessageCircle className="w-4 h-4 text-white fill-current" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-2 border-zinc-900">
                                <MessageCircle className="w-4 h-4 text-white fill-current" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-zinc-900 overflow-hidden p-1">
                                <div className="w-full h-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full"></div>
                            </div>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-medium uppercase tracking-tight">Perfect for group chats!</span>
                    </div>
                </div>
            </div>


            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center space-y-1">
                <div className="text-4xl font-bold text-white">${amount === "0" ? "0.00" : amount}</div>
                <div className="text-zinc-500 text-sm">Balance: ${balance}</div>
            </div>


            <input
                type="text"
                value={comment}
                onChange={(e) => onCommentChange(e.target.value)}
                placeholder="Comment"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 px-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-cheese-yellow/50 transition-all text-sm"
            />


            <div className="flex-1 flex flex-col justify-end pb-4">
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {keypad.map((key) => (
                        <button
                            key={key}
                            onClick={() => (key === "." ? handleDot() : handleNumberClick(key))}
                            className="h-14 flex items-center justify-center text-2xl font-semibold text-white bg-zinc-900/30 rounded-2xl active:bg-zinc-800 transition-colors"
                        >
                            {key}
                        </button>
                    ))}
                    <button
                        onClick={handleDelete}
                        className="h-14 flex items-center justify-center text-white bg-zinc-900/30 rounded-2xl active:bg-zinc-800 transition-colors"
                    >
                        <Delete className="w-6 h-6" />
                    </button>
                </div>

                <Button
                    onClick={onSend}
                    disabled={parseFloat(amount) <= 0}
                    className="w-full h-16 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-[32px] hover:bg-zinc-800 active:scale-95 text-lg flex items-center justify-center gap-2"
                >
                    <Plus className="w-5 h-5 rotate-45" />
                    Send with
                    <div className="flex items-center gap-1 ml-1 bg-white/10 px-2 py-1 rounded-full text-sm">
                        <Image src="/images/splashscreen-img.svg" alt="Cheese" width={20} height={20} className="w-5 h-5" />
                        <span className="text-white">Cheese Pay</span>
                    </div>
                </Button>
            </div>
        </div>
    );
}
