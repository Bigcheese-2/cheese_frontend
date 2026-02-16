"use client";

import { BackButton } from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import { VerificationStatus } from "@/features/profile/components/VerificationStatus";

export default function VerificationPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen px-4 pb-32">
            <header className="flex justify-between items-center py-6">
                <div className="flex items-center gap-4">
                    <BackButton />
                </div>
                <h1 className="text-xl font-bold text-white">Your Badges</h1>
                <div className="w-10 h-10" />
            </header>

            <div className="flex-1 flex flex-col justify-center">
                <VerificationStatus />
            </div>
        </div>
    );
}
