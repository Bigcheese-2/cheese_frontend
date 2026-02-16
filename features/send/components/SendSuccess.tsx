"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheeseMascot } from "../../auth/components/CheeseMascot";

interface SendSuccessProps {
    amount: string;
    recipientName?: string;
    onClose: () => void;
}

export function SendSuccess({ amount, recipientName, onClose }: SendSuccessProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 animate-in zoom-in duration-500">
            <div className="relative">
                <CheeseMascot variant="success" className="w-64 h-64" />
            </div>

            <div className="w-full max-w-sm bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                </div>

                <div className="space-y-1">
                    <div className="text-zinc-400 text-sm">Transfer Successful</div>
                    <div className="text-white font-bold text-2xl">${amount}</div>
                    <div className="text-zinc-500 text-sm mt-2">
                        {recipientName ? `Sent to ${recipientName}` : "Payment link created!"}
                    </div>
                </div>
            </div>

            <Button
                onClick={onClose}
                className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 transition-all text-lg"
            >
                Back to Home
            </Button>
        </div>
    );
}
