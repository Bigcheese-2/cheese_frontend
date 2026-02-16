"use client";

import { Plus, SendIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function QuickActions() {
    return (
        <div className="flex gap-4 px-6 mb-8">
            <Link href="/send" className="flex-1">
                <button className="w-full flex items-center justify-center gap-2 bg-white text-black h-14 rounded-full font-bold active:scale-95 transition-transform">
                    <SendIcon className="w-5 h-5 " strokeWidth={2.5} />
                    Send
                </button>
            </Link>
            <Link href="/add-money" className="flex-1">
                <button className="w-full flex items-center justify-center gap-2 bg-[#595959] text-white h-14 rounded-full font-bold border border-zinc-800/20 active:scale-95 transition-transform">
                    <Image src="/images/withdrawwhite.svg" alt="add money" className="w-5 h-5" width={20} height={20} />
                    Add funds
                </button>
            </Link>
        </div>
    );
}
