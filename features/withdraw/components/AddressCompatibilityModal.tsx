"use client";

import React from "react";
import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddressCompatibilityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function AddressCompatibilityModal({
    isOpen,
    onClose,
    onConfirm,
}: AddressCompatibilityModalProps) {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 z-50 flex items-end justify-center sm:items-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 space-y-6 relative animate-in slide-in-from-bottom duration-500">
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-zinc-500 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-cheese-yellow/10 flex items-center justify-center">
                        <AlertTriangle className="w-8 h-8 text-cheese-yellow" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Is this address compatible?</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Only send to address that support the selected network and token. Incorrect transfers may be lost.
                        </p>
                    </div>
                </div>

                <Button
                    onClick={onConfirm}
                    className="w-full h-16 bg-[#162D2C] text-[#D1FAE5] font-bold rounded-[32px] hover:bg-[#1e3d3b] transition-all text-lg"
                >
                    I understand. Continue
                </Button>
            </div>
        </div>
    );
}
