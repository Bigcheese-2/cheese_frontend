"use client";

import { ArrowDown, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ACTIVITIES = [
    {
        id: "1",
        type: "request",
        title: "Requested via Link",
        subtitle: "Request",
        status: "pending",
        amount: "$550.00",
        isPositive: false,
        icon: Link,
    },
    {
        id: "2",
        type: "perk",
        title: "Cheese Perk!",
        subtitle: "Cashback",
        status: "completed",
        amount: "+$269.00",
        isPositive: true,
        icon: "star",
    },
    {
        id: "3",
        type: "request",
        title: "Requested via Link",
        subtitle: "Request",
        status: "pending",
        amount: "$21.00",
        isPositive: false,
        icon: Link,
    },
    {
        id: "4",
        type: "transfer",
        title: "Fola Ade",
        subtitle: "Received by you · Jan 3rd",
        amount: "$521.00",
        isPositive: false,
        icon: ArrowDown,
    },
    {
        id: "5",
        type: "request",
        title: "Requested via Link",
        subtitle: "Request",
        status: "pending",
        amount: "$8,550.00",
        isPositive: false,
        icon: Link,
    },
];

import { History, CheckCircle2, ChevronRight, Hourglass } from "lucide-react";

export function ActivityList() {
    return (
        <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-base">Activity</h3>
                <ChevronRight className="text-zinc-500 w-5 h-5" />
            </div>

            <div className="space-y-5">
                {ACTIVITIES.map((activity) => {
                    const Icon = activity.icon;
                    return (
                        <div
                            key={activity.id}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                                    activity.type === "perk"
                                        ? "bg-[#303030] text-yellow-500"
                                        : "bg-[#303030] text-zinc-400"
                                )}>
                                    {activity.type === "perk" ? (
                                        <Image src="/images/star.svg" alt="perk" width={20} height={20} className="w-5 h-5" />
                                    ) : activity.type === "request" ? (
                                        <div className="relative">
                                            <Icon className="w-5 h-5 " strokeWidth={1.5} />
                                        </div>
                                    ) : (
                                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                                    )}
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <h4 className="text-white font-semibold text-[14px]">{activity.title}</h4>
                                    <div className="flex items-center gap-1">
                                        {activity.type === "transfer" ? (
                                            <ArrowDown className="w-3 h-3 text-zinc-500" />
                                        ) : (
                                            <div className="rotate-45">
                                                <ArrowDown className="w-3 h-3 text-zinc-500" />
                                            </div>
                                        )}
                                        <p className="text-zinc-500 text-[12px]">{activity.subtitle}</p>
                                        {activity.status === "pending" && (
                                            <div className="w-3.5 h-3.5 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                                <Hourglass className="w-2 h-2 text-yellow-500" strokeWidth={3} />
                                            </div>
                                        )}
                                        {activity.status === "completed" && (
                                            <div className="w-3.5 h-3.5 bg-green-500/20 rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="w-2 h-2 text-green-500" strokeWidth={3} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <span className={cn(
                                "font-bold font-display text-[16px]",
                                activity.isPositive ? "text-green-500" : "text-white"
                            )}>
                                {activity.amount}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
