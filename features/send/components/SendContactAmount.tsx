"use client";

import React from "react";
import { Delete, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Contact } from "../types";

interface SendContactAmountProps {
    contact: Contact;
    amount: string;
    balance: string;
    comment: string;
    onAmountChange: (amount: string) => void;
    onCommentChange: (comment: string) => void;
    onSend: () => void;
}

export function SendContactAmount({
    contact,
    amount,
    balance,
    comment,
    onAmountChange,
    onCommentChange,
    onSend,
}: SendContactAmountProps) {
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

            <button className="w-full flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all text-left group">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cheese-yellow flex items-center justify-center text-black font-bold text-lg">
                        {contact.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="text-white font-semibold text-lg">{contact.name}</div>
                            <div className="text-emerald-400">⚡️</div>
                            <div className="text-emerald-400">⚡️</div>
                        </div>
                        <div className="text-zinc-500 text-sm font-mono tracking-tight">{contact.handle}</div>
                    </div>
                </div>
                <ChevronRight className="w-6 h-6 text-zinc-500 group-hover:translate-x-1 transition-transform" />
            </button>


            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center space-y-1">
                <div className="text-4xl font-bold text-white">${amount === "0" ? "0.00" : amount}</div>
                <div className="text-zinc-500 text-sm">Balance: ${balance}</div>
            </div>


            <input
                type="text"
                value={comment}
                onChange={(e) => onCommentChange(e.target.value)}
                placeholder="Jane Doe money"
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
                    className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 active:scale-95 text-lg flex items-center justify-center gap-2"
                >
                    <Plus className="w-5 h-5 rotate-45" />
                    Send with
                    <div className="flex items-center gap-1 ml-1 bg-black/5 px-2 py-1 rounded-full text-sm font-bold">
                        <Image src="/images/splashscreen-img.svg" alt="Cheese" width={20} height={20} className="w-5 h-5" />
                        <span className="text-black">Cheese Pay</span>
                    </div>
                </Button>
            </div>
        </div>
    );
}
