"use client";

import { QrCode, Share2, Copy, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InviteQR({ referralCode }: { referralCode: string }) {
    return (
        <div className="flex flex-col items-center gap-8 py-4">
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border-2 border-white/5">
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-xl text-white/50">JD</span>
                </div>
            </div>

            <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-white">Invite friends!</h2>
                <p className="text-white/40 text-sm px-8 leading-relaxed">
                    Invite friends to Cheese Pay and help them skip ahead. Once they're onboarded, they'll start earning rewards from their activity too.
                </p>
            </div>

            <div className="bg-white p-6 rounded-[24px]">
                <div className="w-48 h-48 bg-zinc-100 flex items-center justify-center">
                    <QrCode className="w-40 h-40 text-black" strokeWidth={1.5} />
                </div>
            </div>

            <div className="w-full space-y-4">
                <div className="relative">
                    <input
                        readOnly
                        value={referralCode}
                        className="w-full h-14 bg-[#1C1C1E] border border-white/10 rounded-[12px] px-4 pr-12 text-white font-medium focus:outline-none"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg">
                        <Copy className="w-5 h-5 text-white/40" />
                    </button>
                </div>

                <Button className="w-full h-14 bg-white text-black hover:bg-white/90 rounded-full font-bold flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share invite link
                </Button>
            </div>
        </div>
    );
}
