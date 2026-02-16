"use client";

import { BackButton } from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CardPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-black/60 backdrop-blur-xl z-50 px-6 py-8 border-x border-zinc-900">
                <div className="flex items-center justify-center relative">
                    <BackButton className="absolute left-0" />
                    <h2 className="text-xl font-bold">Card</h2>
                </div>
            </header>

            <div className=" px-6 pb-6 h-screen">
                <div className="flex-1 flex flex-col h-screen items-center justify-center">
                    <div className="w-full flex items-center justify-center ">
                        <Image src="/images/cheesecard.svg" alt="Cheese Card" width={200} height={200} className=" " />
                    </div>
                </div>
            </div>
        </div>
    );
}
