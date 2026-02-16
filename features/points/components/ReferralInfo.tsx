"use client";

import { Copy, Share2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReferralInfoProps {
    invitedBy?: {
        name: string;
        avatar?: string;
    };
    referralCode: string;
}

export function ReferralInfo({ invitedBy, referralCode }: ReferralInfoProps) {
    return (
        <div className="space-y-8">
            {invitedBy && (
                <p className="text-white text-sm text-center px-6 leading-relaxed">
                    <span className="font-bold">{invitedBy.name}</span> 💚 invited you and earned points. Now it's turn! Invite friends and get 20% of their points.
                </p>
            )}

            <div className="space-y-4">
                <h3 className="text-white font-bold px-1">Invite friends with your code</h3>
                <div className="relative group">
                    <input
                        readOnly
                        value={referralCode}
                        className="w-full h-14 bg-[#1C1C1E] border border-white/10 rounded-[12px] px-4 pr-12 text-white font-medium focus:outline-none"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors">
                        <Copy className="w-5 h-5 text-white/40" />
                    </button>
                </div>
            </div>

            <div className="bg-[#1C1C1E] border border-white/5 rounded-[32px] p-8 flex flex-col items-center gap-6">
                <div className="w-14 h-14 bg-[#34C759]/20 rounded-full flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-[#34C759]" />
                </div>

                <div className="text-center space-y-2">
                    <h4 className="text-white font-bold text-lg">No invites yet</h4>
                    <p className="text-white/60 text-sm px-4">
                        Send your invite link to start earning more rewards
                    </p>
                </div>

                <Button className="w-full h-14 bg-white text-black hover:bg-white/90 rounded-full font-bold flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share invite link
                </Button>
            </div>
        </div>
    );
}
