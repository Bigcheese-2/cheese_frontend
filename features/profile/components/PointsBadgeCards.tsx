"use client";

import { ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function PointsBadgeCards() {
    return (
        <div className="grid grid-cols-2 gap-4 my-6 px-1 ">
            <Link
                href="/points/badges"
                className="relative bg-[#0E2924]/25 border border-white/5 rounded-[24px] h-32 p-4 flex flex-col justify-end gap-2 overflow-hidden active:scale-95 transition-all group"
            >
                <Image
                    src="/images/rockett-img.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="absolute -top-2 -right-2 w-28 h-28 object-contain group-hover:scale-110 transition-transform"
                />
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-white/40" />
                    <span className="text-white text-sm font-medium">Your badges</span>
                </div>
            </Link>

            <Link
                href="/points"
                className="relative bg-[#0E2924]/25 border border-white/5 rounded-[24px] h-32 p-4 flex flex-col justify-end gap-2 overflow-hidden active:scale-95 transition-all group"
            >
                <Image
                    src="/images/giftbox-img.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="absolute -top-2 -right-4 w-32 h-32 object-contain group-hover:scale-110 transition-transform"
                />
                <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#FFD411]" />
                    <span className="text-white text-sm font-medium">Points</span>
                </div>
            </Link>
        </div>
    );
}
