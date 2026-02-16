"use client";

import Link from "next/link";
import { CheeseMascot } from "@/features/auth/components/CheeseMascot";


export default function WelcomePage() {
    return (
        <div className="flex flex-col items-center justify-between flex-1 h-full py-8 text-center animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex-1 flex items-center justify-center w-full">
                <CheeseMascot variant="welcome" priority />
            </div>

            <div className="flex flex-col gap-4 w-full mt-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-display text-white w-3/4 mx-auto ">
                        Welcome to Cheese Wallet
                    </h1>
                    <p className="text-zinc-400 text-sm font-sans px-4">
                        Cheese wallet makes spending your crypto easy.
                    </p>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                    <Link
                        href="/signup"
                        className="w-full py-4 bg-white text-[#0B3018] font-bold rounded-full hover:bg-white transition-colors active:scale-95"
                    >
                        Create new wallet
                    </Link>
                    <Link
                        href="/login"
                        className="w-full py-2 text-[#E8F1EB] font-medium hover:text-cheese-yellow transition-colors"
                    >
                        I already have a wallet
                    </Link>
                </div>
            </div>
        </div>
    );
}
