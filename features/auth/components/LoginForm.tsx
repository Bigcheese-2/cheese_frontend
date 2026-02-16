"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheeseMascot } from "./CheeseMascot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

/**
 * LoginForm component
 * 
 * A clean, feature-based form for user authentication.
 * Uses Tailwind v4 and maintainable state management.
 */
import { TopNav } from "@/components/navigation/TopNav";

export function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <div className="flex flex-col w-full animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-center mb-8">
                <CheeseMascot variant="signin" className="" />
            </div>

            <div className="space-y-2 mb-8">
                <h1 className="text-2xl font-display text-white text-center">
                    Sign in to Your Account
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-zinc-400 text-xs font-medium ml-1 text-left">
                        Email Or username
                    </Label>
                    <Input
                        id="email"
                        type="text"
                        placeholder="johndoe@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-input-bg border-zinc-800 rounded-2xl h-14 text-white placeholder:text-zinc-600 focus-visible:ring-cheese-yellow transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                    <Label htmlFor="password" className="text-zinc-400 text-xs font-medium ml-1">
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-input-bg border-zinc-800 rounded-2xl h-14 text-white placeholder:text-zinc-600 focus-visible:ring-cheese-yellow transition-colors"
                    />
                </div>

                <div className="flex items-center justify-between text-xs mt-1">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember"
                            checked={rememberMe}
                            onCheckedChange={(checked) => setRememberMe(checked === true)}
                            className="border-zinc-700 data-[state=checked]:bg-cheese-yellow data-[state=checked]:border-cheese-yellow"
                        />
                        <Label htmlFor="remember" className="text-zinc-400 font-normal cursor-pointer hover:text-zinc-300">
                            Remember Password
                        </Label>
                    </div>
                    <button type="button" className="text-cheese-yellow italic font-medium hover:underline">
                        Forgot Password?
                    </button>
                </div>

                <Button
                    type="submit"
                    className="w-full h-14 bg-white text-[#0B3018] font-bold rounded-full mt-4 hover:bg-white active:scale-95 transition-all"
                >
                    Sign In
                </Button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-sm text-zinc-500">
                    Don't have an account?{" "}
                    <button
                        onClick={() => router.push("/signup")}
                        className="text-white font-bold  tracking-wide hover:underline"
                    >
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    );
}
