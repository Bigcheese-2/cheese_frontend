"use client";

import { BottomNav } from "@/components/navigation/BottomNav";
import { ProfileNav } from "@/components/navigation/ProfileNav";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isProfilePage = pathname === "/profile";

    return (
        <div className="flex flex-col min-h-dvh relative">
            <main className="flex-1 pb-24">
                {children}
            </main>
            {isProfilePage ? <ProfileNav /> : <BottomNav />}
        </div>
    );
}
