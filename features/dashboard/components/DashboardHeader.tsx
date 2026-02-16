"use client";

import { useRouter } from "next/navigation";
import { Bell } from "lucide-react";

export function DashboardHeader() {
    const router = useRouter();

    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-28 bg-black/60 backdrop-blur-xl z-50 px-6 flex items-center justify-between border-x border-x-zinc-900 border-b border-b-white/5">
            <button
                onClick={() => router.push("/profile")}
                className="flex items-center gap-3 active:scale-95 transition-transform"
            >
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop"
                        alt="John Doe"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <h2 className="text-white font-semibold text-base">Hello, John Doe</h2>
                    <p className="text-zinc-500 text-xs">Welcome back!</p>
                </div>
            </button>

            <button
                onClick={() => router.push("/notifications")}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 active:scale-95 transition-transform"
            >
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#FF3B30] text-white text-[10px] font-bold rounded-full border-2 border-black flex items-center justify-center">
                    4
                </span>
            </button>
        </header>
    );
}
