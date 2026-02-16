"use client";

import { BackButton } from "@/components/ui/BackButton";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BadgesPage() {
    const router = useRouter();

    const badges = [
        {
            id: 1,
            name: "Beta Tester",
            description: "Your broke things so others don't hav...",
            image: "/images/rockett-img.svg",
            earned: true
        },
    ];

    return (
        <div className="flex flex-col min-h-screen px-4 pb-32">
            <header className="flex justify-between items-center py-6 px-4">
                <BackButton />
                <h1 className="text-xl font-bold text-white">Your Badges</h1>
                <div className="w-10 h-10" />
            </header>

            <div className="space-y-4 mt-8">
                {badges.map(badge => (
                    <div
                        key={badge.id}
                        className="bg-[#1C1C1E] p-4 rounded-full border border-white/5 flex items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center overflow-hidden">
                            <img src={badge.image} alt="" className="w-10 h-10 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-bold">{badge.name}</p>
                            <p className="text-white/40 text-xs truncate">{badge.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-start gap-2 px-2">
                <Info className="w-4 h-4 text-white/40 mt-0.5" />
                <p className="text-white/40 text-sm leading-tight">
                    These badges are displayed on your public profile.
                </p>
            </div>
        </div>
    );
}
