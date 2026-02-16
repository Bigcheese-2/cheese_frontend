"use client";

import { Share2, Copy } from "lucide-react";


interface ProfileHeaderProps {
    name: string;
    username: string;
    avatarUrl?: string;
}

export function ProfileHeader({ name, username, avatarUrl }: ProfileHeaderProps) {
    const profileLink = `cheesepay.me/${username}`;

    return (
        <div className="flex flex-col items-center py-8">
            <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border-2 border-white/5">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                            <span className="text-2xl text-white/50">JD</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-white">{name}</h1>
                    <button className="p-1 hover:bg-white/5 rounded-md transition-colors">
                        <Copy className="w-5 h-5 text-white/60" />
                    </button>
                </div>

                <div className="flex items-center gap-2 px-6 py-2 bg-[#1C1C1E] rounded-full border border-white/5 group active:scale-95 transition-all">
                    <span className="text-white text-sm font-medium">{profileLink}</span>
                    <Share2 className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    );
}
