"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EditProfileForm() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        bio: "",
        email: "",
        phone: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const inputClasses = "h-14 bg-[#111111] border-white/5 rounded-[12px] text-white placeholder:text-zinc-600 focus:border-[#FFD411]/50 transition-colors";
    const labelClasses = "text-white text-base font-medium mb-3 block px-1";

    return (
        <form onSubmit={handleSubmit} className="space-y-6 pb-20">
            <div className="space-y-2">
                <Label className={labelClasses}>Name</Label>
                <Input
                    placeholder="Add your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                />
            </div>

            <div className="space-y-2">
                <Label className={labelClasses}>Username</Label>
                <Input
                    placeholder="Add your surname"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className={inputClasses}
                />
            </div>

            <div className="space-y-2">
                <Label className={labelClasses}>Bio</Label>
                <Input
                    placeholder="Add your bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className={inputClasses}
                />
            </div>

            <div className="space-y-2">
                <Label className={labelClasses}>Email</Label>
                <Input
                    type="email"
                    placeholder="Add your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                />
            </div>

            <div className="space-y-2">
                <Label className={labelClasses}>Phone number</Label>
                <Input
                    placeholder="Add your number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClasses}
                />
            </div>

            <Button type="submit" className="w-full h-14 bg-white text-black hover:bg-zinc-200 rounded-full font-bold text-lg mt-4 transition-all active:scale-95">
                Save Changes
            </Button>
        </form>
    );
}
