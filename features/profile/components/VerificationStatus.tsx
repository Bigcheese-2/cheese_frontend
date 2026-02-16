"use client";

import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VerificationStatus() {
    return (
        <div className="flex flex-col items-center text-center gap-8 py-10 px-4">
            <div className="w-16 h-16 bg-[#FFD411] rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-black" />
            </div>

            <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white">Verification</h2>
                <p className="text-white text-base leading-snug px-4">
                    No need to verify unless you want to move money to or from your bank.
                </p>
            </div>

            <div className="w-full space-y-4 mt-4">
                <Button
                    asChild
                    className="w-full h-14 bg-white text-black hover:bg-zinc-200 rounded-full font-bold text-lg"
                >
                    <a href="/verification/flow">Verify now</a>
                </Button>
                <button className="w-full py-2 text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">
                    Not now
                </button>
            </div>
        </div>
    );
}
