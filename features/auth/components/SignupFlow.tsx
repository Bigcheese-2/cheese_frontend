"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheeseMascot } from "./CheeseMascot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { BackButton } from "@/components/ui/BackButton";
import Link from "next/link";

type SignupStep = "email" | "otp" | "success";

/**
 * SignupFlow component
 * 
 * Manages the multi-step signup process:
 * 1. Email Entry
 * 2. OTP Verification
 * 3. Success (Wallet Ready)
 */
import { TopNav } from "@/components/navigation/TopNav";

export function SignupFlow() {
    const router = useRouter();
    const [step, setStep] = useState<SignupStep>("email");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) setStep("otp");
    };

    const handleOtpChange = (value: string) => {
        setOtp(value.split(""));
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.every(v => v !== "")) setStep("success");
    };

    if (step === "email") {
        return (
            <div className="flex flex-col flex-1 h-full animate-in slide-in-from-right duration-500">
                <div className="flex items-center mb-8 -ml-2">
                    <BackButton />
                </div>

                <div className="space-y-2 mb-8">
                    <h1 className="text-2xl font-display text-white">
                        Enter Your Email Address
                    </h1>
                    <p className="text-zinc-400 text-sm">
                        We'll send you a verification code.
                    </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="flex flex-col flex-1">
                    <div className="flex flex-col gap-1.5 text-left mb-8">
                        <Input
                            id="email"
                            type="email"
                            placeholder="Example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-input-bg border-zinc-800 rounded-lg h-14 text-white placeholder:text-zinc-600 focus-visible:ring-cheese-yellow transition-colors"
                            required
                        />
                    </div>

                    <div className="mt-auto pb-6 space-y-6">
                        <p className="text-[13px] text-zinc-400 text-center leading-relaxed">
                            By entering your email address and tapping send. you agree to the <span className="font-bold underline text-white cursor-pointer">Privacy Policy</span>
                        </p>
                        <Button
                            type="submit"
                            className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 transition-all active:scale-95 text-lg"
                        >
                            Send via Email
                        </Button>
                    </div>
                </form>
            </div>
        );
    }

    if (step === "otp") {
        return (
            <div className="flex flex-col flex-1 h-full animate-in slide-in-from-right duration-500 text-center">
                <div className="flex items-center mb-8 -ml-2 text-left">
                    <BackButton onClick={() => setStep("email")} />
                </div>

                <div className="space-y-2 mb-12 text-left">
                    <h1 className="text-2xl font-display text-white">
                        Please enter the code sent to your email
                    </h1>
                    <p className="text-zinc-400 text-sm">{email}</p>
                </div>

                <form onSubmit={handleOtpSubmit} className="flex flex-col flex-1">
                    <div className="flex justify-center mb-8">
                        <InputOTP
                            maxLength={6}
                            value={otp.join("")}
                            onChange={handleOtpChange}
                            className="gap-2"
                        >
                            <InputOTPGroup className="gap-2">
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                    <InputOTPSlot
                                        key={i}
                                        index={i}
                                        className="w-12 h-14 bg-input-bg border-zinc-800 rounded-xl text-xl font-bold text-white focus:ring-cheese-yellow border"
                                    />
                                ))}
                            </InputOTPGroup>
                        </InputOTP>
                    </div>

                    <div className="mt-auto pb-6 space-y-4">
                        <Button
                            type="submit"
                            className="w-full h-16 bg-white text-black font-bold rounded-[32px] transition-all active:scale-95 text-lg"
                        >
                            Next
                        </Button>
                        <Button
                            variant="link"
                            type="button"
                            className="text-zinc-400 text-sm hover:text-white transition-colors"
                        >
                            Send again
                        </Button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center flex-1 h-full py-8 text-center animate-in zoom-in duration-700">
            <div className="flex-1 flex items-center justify-center w-full">
                <CheeseMascot variant="success" />
            </div>
            <div className="space-y-2 mb-12">
                <h1 className="text-3xl font-display text-white w-3/4 mx-auto">
                    Brilliant, your wallet is ready!
                </h1>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <Button
                    onClick={() => router.push("/dashboard")}
                    className="w-full h-14 bg-zinc-100 text-black font-bold rounded-full hover:bg-white transition-all active:scale-95"
                >
                    Fund your Wallet
                </Button>
                <Button
                    variant="link"
                    onClick={() => router.push("/dashboard")}
                    className="w-full h-10 text-[#E8F1EB] font-semibold hover:text-white hover:bg-none hover:no-underline"
                >
                    Skip, I'll do it later
                </Button>
            </div>
        </div>
    );
}
