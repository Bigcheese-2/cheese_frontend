"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Smile, User, Eye, RefreshCw, Globe, LogOut } from "lucide-react";
import { SettingRow } from "@/components/ui/SettingRow";
import { Switch } from "@/components/ui/switch";

export function SettingsList() {
    const [showFullName, setShowFullName] = useState(true);
    const router = useRouter();

    const settingsItems = [
        {
            icon: <Smile className="w-5 h-5 text-white/60" />,
            label: "Invite friends to Cheese Pay",
            href: "/points/invite",
        },
        {
            icon: <User className="w-5 h-5 text-white/60" />,
            label: "Personal details",
            href: "/profile/edit",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="bg-[#0E2924]/25 border border-white/5 rounded-[24px] p-2 space-y-1">
                {settingsItems.map((item) => (
                    <SettingRow
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        onClick={() => router.push(item.href)}
                        className="hover:bg-white/5 rounded-2xl px-3"
                    />
                ))}

                <SettingRow
                    icon={<Eye className="w-5 h-5 text-white/60" />}
                    label="Show my full name"
                    showChevron={false}
                    rightElement={
                        <Switch
                            checked={showFullName}
                            onCheckedChange={setShowFullName}
                        />
                    }
                    className="hover:bg-white/5 rounded-2xl px-3"
                />

                <SettingRow
                    icon={<RefreshCw className="w-5 h-5 text-white/60" />}
                    label="Exchange rates and fees"
                    onClick={() => router.push("/rates")}
                    className="hover:bg-white/5 rounded-2xl px-3"
                />

                <SettingRow
                    icon={<Globe className="w-5 h-5 text-white/60" />}
                    label="Regions & Verification"
                    onClick={() => router.push("/verification")}
                    className="hover:bg-white/5 rounded-2xl px-3 border-none"
                />
            </div>

            <div className="pb-4">
                <button
                    className="flex items-center gap-4 px-1 text-red-500 hover:opacity-70 transition-opacity"
                    onClick={() => { }}
                >
                    <LogOut className="w-5 h-5" />
                    <span className="text-base font-medium">Log out</span>
                </button>
            </div>
        </div>
    );
}
