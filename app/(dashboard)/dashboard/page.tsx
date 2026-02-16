"use client";

import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { BalanceCard } from "@/features/dashboard/components/BalanceCard";
import { QuickActions } from "@/features/dashboard/components/QuickActions";
import { PromoBanner } from "@/features/dashboard/components/PromoBanner";
import { ActivityList } from "@/features/dashboard/components/ActivityList";

export default function DashboardPage() {
    return (
        <div className="flex flex-col min-h-screen pt-28 pb-24">
            <DashboardHeader />
            <div className="pt-10">

                <BalanceCard />
                <QuickActions />
                <PromoBanner />
                <ActivityList />
            </div>

        </div>
    );
}
