"use client";

import { BackButton } from "@/components/ui/BackButton";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import { PointsStats } from "@/features/points/components/PointsStats";
import { ReferralInfo } from "@/features/points/components/ReferralInfo";
import { Button } from "@/components/ui/button";

export default function PointsPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen pb-32">
            <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-black/60 backdrop-blur-xl z-50 px-6 py-8 border-x border-zinc-900">
                <div className="flex items-center justify-between">
                    <BackButton />
                    <h1 className="text-xl font-bold text-white">Points</h1>
                    <div className="w-10 h-10" />
                </div>
            </header>

            <div className="space-y-8 pt-32 px-4">
                <PointsStats
                    points={100}
                    currentTier={0}
                    nextTierPoints={500}
                />

                <ReferralInfo
                    invitedBy={{
                        name: "Chidalu Obisike",
                    }}
                    referralCode="CHIDALU24"
                />

                <Button
                    variant="link"
                    className="w-full text-[#FFD411] font-medium"
                    onClick={() => router.push("/points/invite")}
                >
                    View my invite link & QR code
                </Button>
            </div>
        </div>
    );
}
