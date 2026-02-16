"use client";

import React from "react";
import Image from "next/image";
import { Link2, MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestKeypad } from "./RequestKeypad";

interface RequestInputProps {
    amount: string;
    comment: string;
    isCreating: boolean;
    onAmountChange: (amount: string) => void;
    onCommentChange: (comment: string) => void;
    onCreate: () => void;
}

export function RequestInput({
    amount,
    comment,
    isCreating,
    onAmountChange,
    onCommentChange,
    onCreate,
}: RequestInputProps) {
    const handleKeyPress = (key: string) => {
        if (amount === "0.00" || amount === "0") {
            onAmountChange(key);
        } else {
            onAmountChange(amount + key);
        }
    };

    const handleDelete = () => {
        if (amount.length <= 1) {
            onAmountChange("0");
        } else {
            onAmountChange(amount.slice(0, -1));
        }
    };

    return (
        <div className="flex flex-col h-full space-y-6 animate-in slide-in-from-right duration-500">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-600/20 text-green-500 flex items-center justify-center shrink-0 mt-1">
                    <Link2 className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                    <div className="space-y-1">
                        <h4 className="text-white font-bold text-base">Request money frm friends</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">They don’t need an account to pay</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center border-2 border-zinc-900 p-1">
                                <MessageCircle className="w-full h-full text-white fill-current" />
                            </div>
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center border-2 border-zinc-900 p-1">
                                <MessageCircle className="w-full h-full text-white fill-current" />
                            </div>
                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-zinc-900 overflow-hidden p-1">
                                <div className="w-full h-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full"></div>
                            </div>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-medium uppercase tracking-tight">Perfect for group chats!</span>
                    </div>
                </div>
            </div>


            <div className="flex justify-center py-4">
                <div className="relative w-48 h-48 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group">
                    <div className="absolute inset-2 filter blur-sm opacity-50 bg-white/10 rounded-lg flex items-center justify-center">

                        <div className="grid grid-cols-4 gap-2">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-zinc-700 rounded-sm"></div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/images/splashscreen-img.svg"
                            alt="Cheese"
                            width={40}
                            height={40}
                            className="opacity-80"
                        />
                    </div>
                </div>
            </div>


            <div className="flex-1 flex flex-col justify-end space-y-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center space-y-2 relative">
                    <div className="text-4xl font-bold text-white tracking-tight">${amount === "0" ? "0.00" : amount}</div>
                    <div className="text-zinc-500 text-sm">Balance: $8,269.00</div>

                    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-full">
                        <Info className="w-3.5 h-3.5 text-zinc-500" />
                        <span className="text-zinc-500 text-[11px]">Leave empty to let payers chose amounts.</span>
                    </div>
                </div>

                <input
                    type="text"
                    value={comment}
                    onChange={(e) => onCommentChange(e.target.value)}
                    placeholder="Comment"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 px-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-cheese-yellow/50 transition-all text-sm"
                />

                <div className="pb-4">
                    <RequestKeypad onPress={handleKeyPress} onDelete={handleDelete} />

                    <Button
                        onClick={onCreate}
                        disabled={isCreating}
                        className="w-full h-16 mt-6 bg-zinc-900 border border-zinc-800 text-zinc-500 font-bold rounded-[32px] hover:bg-zinc-800 active:scale-95 text-lg transition-all"
                    >
                        {isCreating ? (
                            <div className="w-6 h-6 border-2 border-zinc-500 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            "Create Request"
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
