"use client";

import { ProfileHeader } from "@/features/profile/components/ProfileHeader";
import { PointsBadgeCards } from "@/features/profile/components/PointsBadgeCards";
import { SettingsList } from "@/features/profile/components/SettingsList";

export default function ProfilePage() {
    return (
        <div className="flex flex-col min-h-screen px-4 pb-32">
            <ProfileHeader
                name="John Doe"
                username="johndoe"
                avatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop"
            />

            <PointsBadgeCards />

            <div className="space-y-6">
                <SettingsList />
            </div>
        </div>
    );
}
