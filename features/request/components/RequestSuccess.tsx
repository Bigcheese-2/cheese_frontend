"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link2, MessageCircle, Share2, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RequestSuccessProps {
    amount: string;
    comment: string;
    onClose: () => void;
}

export function RequestSuccess({ amount, comment, onClose }: RequestSuccessProps) {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        // Show the success toast after a short delay
        const showTimer = setTimeout(() => setShowToast(true), 500);
        // Hide it after 3 seconds
        const hideTimer = setTimeout(() => setShowToast(false), 3500);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const displayAmount = amount === "0" || amount === "0.00" ? "any" : `$${amount}`;

    return (
        <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-700 relative">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex items-start gap-4 opacity-100">
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
                <div className="relative w-48 h-48 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center p-3 animate-in zoom-in duration-500">

                    <div className="w-full h-full relative">
                        <div className="grid grid-cols-8 gap-1 opacity-90">
                            {[...Array(64)].map((_, i) => (
                                <div key={i} className={`w-full pt-[100%] rounded-sm ${Math.random() > 0.4 ? 'bg-black' : 'bg-transparent'}`}></div>
                            ))}
                        </div>

                        <div className="absolute top-0 left-0 w-8 h-8 border-4 border-black bg-white rounded-sm"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-4 border-black bg-white rounded-sm"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-4 border-black bg-white rounded-sm"></div>


                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-1 rounded-md shadow-lg border border-zinc-100">
                                <Image
                                    src="/images/splashscreen-img.svg"
                                    alt="Cheese"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex-1 flex flex-col justify-end space-y-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center space-y-2 relative">
                    <div className="text-4xl font-bold text-white tracking-tight">${amount === "0" ? "100.00" : (amount.includes('.') ? amount : amount + '.00')}</div>
                    <div className="text-zinc-500 text-sm">Balance: $8,269.00</div>

                    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-full">
                        <Info className="w-3.5 h-3.5 text-zinc-500" />
                        <span className="text-zinc-500 text-[11px]">Leave empty to let payers chose amounts.</span>
                    </div>
                </div>

                <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-4 px-4 text-white text-sm">
                    {comment || "Money"}
                </div>

                <div className="pb-8 relative">
                    <Button
                        onClick={onClose}
                        className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 active:scale-95 text-xl flex items-center justify-center gap-3 transition-all"
                    >
                        <Share2 className="w-6 h-6" />
                        Share {displayAmount} request
                    </Button>


                    <div
                        className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-max transition-all duration-500 transform ${showToast ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
                            }`}
                    >
                        <div className="bg-cheese-yellow text-black font-bold py-2.5 px-6 rounded-2xl shadow-2xl flex items-center gap-2 text-sm border border-black/5">
                            <CheckCircle2 className="w-4 h-4" />
                            Link created successfully
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
