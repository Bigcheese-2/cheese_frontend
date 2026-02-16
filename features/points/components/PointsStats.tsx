"use client";

import { Crown, Sparkles, Trophy } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface PointsStatsProps {
    points: number;
    currentTier: number;
    nextTierPoints: number;
}

export function PointsStats({ points, currentTier, nextTierPoints }: PointsStatsProps) {
    const progress = (points / nextTierPoints) * 100;

    return (
        <div className="bg-[#1C1C1E] border border-white/5 rounded-[32px] p-8 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-[#FFD411]" />
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">{points}</span>
                        <span className="text-xl font-medium text-white">Points</span>
                    </div>
                </div>
            </div>

            <div className="w-full space-y-4">
                <div className="relative flex items-center justify-between px-1">
                    {/* Leafy/Wheat icon placeholder */}
                    <div className="text-[#FFD411] w-6 h-6 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM6 7C4.9 7 4 7.9 4 9C4 10.1 4.9 11 6 11C7.1 11 8 10.1 8 9C8 7.9 7.1 7 6 7ZM18 7C16.9 7 16 7.9 16 9C16 10.1 16.9 11 18 11C19.1 11 20 10.1 20 9C20 7.9 19.1 7 18 7ZM12 11C9.24 11 7 13.24 7 16V22H17V16C17 13.24 14.76 11 12 11ZM6 20H4V16C4 13.79 5.79 12 8 12H9.17C8.42 13.06 8 14.22 8 15.5V17.5L6 17.5V20ZM20 20H18V17.5L16 17.5V15.5C16 14.22 15.58 13.06 14.83 12H16C18.21 12 20 13.79 20 16V20Z" />
                        </svg>
                    </div>

                    <div className="flex-1 px-3">
                        <div className="relative h-2 bg-[#E1DCC2]/20 rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#34C759] transition-all duration-700"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-[#FFB800]" />
                    </div>
                </div>

                <div className="text-center space-y-1">
                    <p className="text-white/60 text-sm">You're at tier {currentTier}.</p>
                    <p className="text-white/60 text-sm">{(nextTierPoints - points)}points needed to level up</p>
                </div>
            </div>
        </div>
    );
}
