"use client";

import React, { useState } from "react";
import { Copy, Share2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DepositAddress() {
    const [copied, setCopied] = useState(false);
    const address = "0x892a564346b082675e75bbbab023015b6329ff01";

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'My Deposit Address',
                text: address,
            }).catch(() => { });
        } else {
            handleCopy();
        }
    };

    return (
        <div className="flex flex-col items-center gap-8 animate-in zoom-in duration-500">

            <div className="w-full flex items-center gap-3 p-4 bg-zinc-900/50 rounded-3xl border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-cheese-yellow flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-cheese-yellow">
                            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        </svg>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                        <span className="text-zinc-500 font-medium">Deposit</span>
                        <div className="w-4 h-4 rounded-full bg-[#2775CA] flex items-center justify-center text-white text-[8px] font-bold">$</div>
                        <span className="text-white font-bold">USDC</span>
                        <span className="text-zinc-500">on</span>
                        <div className="w-4 h-4 rounded-full bg-[#8247E5] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white">
                                <path d="M16.457 7.942l-5.69 3.284v6.568l5.69-3.284v-6.568zm1.006 8.309l-6.696 3.865-6.696-3.865v-7.73l6.696-3.865 6.696 3.865v7.73z" />
                            </svg>
                        </div>
                        <span className="text-white font-bold">Polygon one</span>
                    </div>
                    <p className="text-zinc-500 text-xs">Other tokens or networks will be lost.</p>
                </div>
            </div>


            <div className="relative p-6 bg-white rounded-3xl">
                <div className="w-48 h-48 bg-white flex items-center justify-center relative">

                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '8px 8px' }} />
                    <div className="w-full h-full border-10 border-black flex flex-wrap p-2">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div key={i} className={`w-[12.5%] h-[12.5%] ${Math.random() > 0.5 ? 'bg-black' : ''}`} />
                        ))}
                    </div>


                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden border-2 border-white">
                            <span className="text-2xl">🧀</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full space-y-2">
                <label className="text-white font-bold text-sm">Your deposit address</label>
                <div
                    onClick={handleCopy}
                    className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-2xl cursor-pointer hover:border-zinc-700 transition-all"
                >
                    <span className="text-zinc-400 text-sm font-mono truncate mr-4">
                        {address}
                    </span>
                    <div className="relative">
                        <Copy className={`w-5 h-5 text-white transition-opacity ${copied ? 'opacity-0' : 'opacity-100'}`} />
                        {copied && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] text-cheese-yellow font-bold uppercase animate-in fade-in zoom-in">Copied</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <Button
                onClick={handleShare}
                className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 active:scale-95 text-lg flex items-center justify-center gap-2"
            >
                <Share2 className="w-5 h-5" />
                Share address
            </Button>
        </div>
    );
}
