"use client";

import { useState } from "react";
import { BackButton } from "@/components/ui/BackButton";
import { BellOff, CreditCard, User, RefreshCcw, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const NOTIFICATIONS = [
    {
        id: "1",
        type: "statement",
        title: "💳 Your monthly statement is now av...",
        time: "Today",
        icon: CreditCard,
        color: "text-[#4ADE80]",
        bg: "bg-[#1C141E]"
    },
    {
        id: "2",
        type: "rewards",
        title: "🌟 Earn double rewards points on all...",
        time: "Today",
        icon: User,
        color: "text-[#38BDF8]",
        bg: "bg-[#1C141E]"
    },
    {
        id: "3",
        type: "update",
        title: "📱 Update your app for the latest fea...",
        time: "Yesterday",
        icon: RefreshCcw,
        color: "text-[#4ADE80]",
        bg: "bg-[#1C141E]"
    },
    {
        id: "4",
        type: "security",
        title: "🔒 Important security update: Enable...",
        time: "Last Week",
        icon: Lock,
        color: "text-[#38BDF8]",
        bg: "bg-[#1C141E]"
    }
];

export default function NotificationPage() {
    const router = useRouter();
    const [isEmpty, setIsEmpty] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-black/60 backdrop-blur-xl z-50 px-6 py-8 border-x border-b border-zinc-900">
                <div className="flex items-center justify-center relative">
                    <BackButton className="absolute left-0" />
                    <h2 className="absolute inset-0 flex items-center justify-center text-xl font-bold">Notification</h2>
                    <button
                        onClick={() => setIsEmpty(!isEmpty)}
                        className="relative z-10 text-xs text-zinc-500 hover:text-white transition-colors"
                    >
                        {isEmpty ? "Show All" : "Clear All"}
                    </button>
                </div>

            </header>


            <div className="flex-1 px-6 pt-32 pb-24">
                {isEmpty ? (
                    <div className="h-full flex flex-col items-center justify-center">
                        <p className="text-white text-base font-normal text-center">
                            You currently have no new notifications
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {NOTIFICATIONS.map((notif) => {
                            const Icon = notif.icon;
                            return (
                                <div
                                    key={notif.id}
                                    className="flex items-start gap-4 active:scale-[0.98] transition-all"
                                >
                                    <div className={cn("w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0", notif.bg)}>
                                        <Icon className={cn("w-6 h-6", notif.color)} />
                                    </div>
                                    <div className="flex-1 pt-0.5">
                                        <h4 className="font-bold text-[15px] leading-tight mb-1 line-clamp-1">{notif.title}</h4>
                                        <span className="text-[13px] text-zinc-500">{notif.time}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
