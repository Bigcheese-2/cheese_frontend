"use client";

import { BackButton } from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import { InviteQR } from "@/features/points/components/InviteQR";

export default function InvitePage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen pb-32">
            <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-black/60 backdrop-blur-xl z-50 px-6 py-8 border-x border-zinc-900">
                <div className="flex items-center justify-center relative">
                    <BackButton className="absolute left-0" />
                    <h1 className="text-xl font-bold text-white">Invite</h1>
                </div>
            </header>

            <div className="pt-32 px-4">
                <InviteQR referralCode="CHIDALU24" />
            </div>
        </div>
    );
}
