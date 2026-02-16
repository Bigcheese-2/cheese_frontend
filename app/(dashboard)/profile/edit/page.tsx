"use client";

import { BackButton } from "@/components/ui/BackButton";
import { Copy, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { EditProfileForm } from "@/features/profile/components/EditProfileForm";

export default function EditProfilePage() {
    const router = useRouter();
    const name = "John Doe";
    const username = "johndoe";
    const profileLink = `cheesepay.me/${username}`;

    return (
        <div className="flex flex-col min-h-screen pb-32">
            <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-black/60 backdrop-blur-xl z-50 px-6 py-8 border-x border-zinc-900">
                <div className="flex items-center justify-between mb-8">
                    <BackButton />
                    <h1 className="text-xl font-bold text-white">Profile</h1>
                    <div className="w-10 h-10" />
                </div>
            </header>

            <div className="pt-28 px-4">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border-2 border-white/5 mb-4">
                        <img
                            src="/images/placeholder-avatar.jpg"
                            alt={name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                            }}
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4 w-full mb-2">
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl font-bold text-white">{name}</h2>
                            <button className="p-1 hover:bg-white/5 rounded-md transition-colors">
                                <Copy className="w-5 h-5 text-white/60" />
                            </button>
                        </div>

                        <div className="flex items-center gap-2 px-6 py-2 bg-[#1C1C1E] rounded-full border border-white/5 group active:scale-95 transition-all">
                            <span className="text-white text-sm font-medium">{profileLink}</span>
                            <Share2 className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <EditProfileForm />
                </div>
            </div>
        </div>
    );
}
