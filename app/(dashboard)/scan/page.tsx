"use client";

import { BackButton } from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

type ViewMode = "scan" | "qr";

export default function ScanPage() {
    const router = useRouter();
    const [viewMode, setViewMode] = useState<ViewMode>("scan");

    return (
        <div className="flex flex-col  min-h-screen bg-black text-white">
            <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-black/60 backdrop-blur-xl z-50 px-6 py-8 border-x border-zinc-900">
                <div className="flex items-center justify-center relative">
                    <BackButton className="absolute left-0" />
                    {viewMode === "scan" && (
                        <button className="w-10 h-10 flex items-center justify-center active:scale-90 transition-all">
                            <Image src="/images/camera.svg" alt="Camera" width={24} height={24} className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </header>

            <div className={`px-6 pb-6 ${viewMode === "scan" ? "" : "pt-28"}`}>
                {viewMode === "scan" ? (

                    <div className="flex-1 flex flex-col gap-8 items-center pt-48 justify-center -mt-10">
                        <div className="relative w-64 h-64 bg-[#1A1A1A] ">

                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-500 rounded-tl-lg" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-500 rounded-tr-lg" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-green-500 rounded-bl-lg" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-green-500 rounded-br-lg" />


                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 border-t-4 border-green-500/30" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 border-b-4 border-green-500/30" />
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 border-l-4 border-green-500/30" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 border-r-4 border-green-500/30" />
                        </div>


                        <div className="flex items-center gap-6 mt-12">
                            <div className="flex items-center gap-2">
                                <img src="/images/cheesescanicon.svg" alt="Cheese" className="w-6 h-6" />
                                <span className="text-sm font-semibold">Cheese</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/images/binancescanicon.svg" alt="Binance" className="w-6 h-6" />
                                <span className="text-sm font-semibold">Binance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/images/metamaskscanicon.svg" alt="Metamask" className="w-6 h-6" />
                                <span className="text-sm font-semibold">Metamask</span>
                            </div>
                        </div>

                        <div className="text-center mt-16 pb-10 space-y-2">
                            <h2 className="text-2xl font-bold">Scan code</h2>
                            <p className="text-zinc-500 text-sm">Scan QR code to make instant payments</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col gap-8 items-center justify-center w-full -mt-10 py-10">
                        <div className="flex items-center justify-between mb-12 w-full">
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold">John Doe</h2>
                                <p className="text-[#FFEA8A] text-sm font-medium">@johnnyboy</p>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>


                        <div className="flex-1 flex flex-col gap-8 items-center justify-center ">
                            <div className="bg-white p-8 rounded-3xl relative">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=johnnyboy" alt="QR Code" className="w-64 h-64" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white p-1 rounded-lg">
                                        <Image src="/images/cheesescanicon.svg" alt="Cheese" width={24} height={24} className="w-10 h-10" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-zinc-500 text-center mt-12 max-w-[350px] leading-relaxed">
                                Send your code to friends and family to receive funds instantly.
                            </p>
                        </div>
                    </div>
                )}


                <div className="flex bg-[#1A1A1A] p-1.5 rounded-full mb-24">
                    <button
                        onClick={() => setViewMode("scan")}
                        className={`flex-1 py-4 rounded-full font-bold text-sm transition-all ${viewMode === "scan" ? "bg-white text-black" : "text-white hover:bg-zinc-800/50"
                            }`}
                    >
                        Scan
                    </button>
                    <button
                        onClick={() => setViewMode("qr")}
                        className={`flex-1 py-4 rounded-full font-bold text-sm transition-all ${viewMode === "qr" ? "bg-white text-black" : "text-white hover:bg-zinc-800/50"
                            }`}
                    >
                        My QR Code
                    </button>
                </div>
            </div>
        </div>
    );
}
