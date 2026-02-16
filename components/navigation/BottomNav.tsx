"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_ITEMS = [
    {
        label: "Home",
        icon: "/images/House.svg",
        href: "/dashboard",
    },
    {
        label: "Withdraw",
        icon: "/images/withdrawwhite.svg",
        href: "/withdraw",
    },
    {
        label: "Scan",
        icon: "/images/scan.svg",
        href: "/scan",
    },
    {
        label: "Request",
        icon: "/images/request.svg",
        href: "/request",
    },
    {
        label: "Profile",
        icon: "profile",
        href: "/profile",
    },
];

export function BottomNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] max-w-[448px] bg-[#111111]/80 backdrop-blur-xl border border-white/5 rounded-[32px] px-2 h-20 z-50">
            <nav className="flex items-center justify-between h-full gap-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href);
                    const isProfile = item.icon === "profile";

                    const renderIcon = (active: boolean) => {
                        const iconClasses = active
                            ? "w-6 h-6 text-black"
                            : "w-6 h-6 text-zinc-600 group-hover:text-zinc-400 transition-all";
                        const imgClasses = active
                            ? "w-6 h-6 invert"
                            : "w-6 h-6 opacity-30 group-hover:opacity-50 transition-all";

                        if (isProfile) {
                            return <User className={iconClasses} strokeWidth={active ? 2.5 : 1.5} />;
                        }

                        return (
                            <Image
                                src={item.icon}
                                alt={item.label}
                                width={24}
                                height={24}
                                className={imgClasses}
                            />
                        );
                    };

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "relative flex flex-col items-center justify-center transition-all duration-300",
                                isActive ? "flex-[1.5]" : "flex-1"
                            )}
                        >
                            {isActive ? (
                                <div className="bg-white rounded-[24px] w-full py-4 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                                    {renderIcon(true)}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-1 group">
                                    {renderIcon(false)}
                                    <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300 font-medium font-sans">
                                        {item.label}
                                    </span>
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
