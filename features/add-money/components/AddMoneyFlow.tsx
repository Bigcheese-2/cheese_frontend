"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { AddMoneyOverview } from "./AddMoneyOverview";
import { AddMoneyMethods } from "./AddMoneyMethods";
import { DepositAddress } from "./DepositAddress";

import { AddMoneyCountries } from "./AddMoneyCountries";

type FlowStep = "overview" | "countries" | "methods" | "address";

import { TopNav } from "@/components/navigation/TopNav";

export function AddMoneyFlow() {
    const router = useRouter();
    const [step, setStep] = useState<FlowStep>("overview");

    const handleBack = () => {
        if (step === "overview") {
            router.back();
        } else if (step === "countries") {
            setStep("overview");
        } else if (step === "methods") {
            setStep("countries");
        } else if (step === "address") {
            setStep("methods");
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white relative">
            <TopNav title="Add Money" onBack={handleBack} />


            <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-24 pb-8">
                {step === "overview" && (
                    <AddMoneyOverview onSelectNew={() => setStep("countries")} />
                )}
                {step === "countries" && (
                    <AddMoneyCountries
                        onSelectCountry={() => setStep("methods")}
                        onSelectCrypto={() => setStep("methods")}
                    />
                )}
                {step === "methods" && (
                    <AddMoneyMethods onSelectCrypto={() => setStep("address")} />
                )}
                {step === "address" && (
                    <DepositAddress />
                )}
            </div>
        </div>
    );
}
