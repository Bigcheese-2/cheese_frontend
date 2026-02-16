"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useWithdrawalLogic } from "../hooks/useWithdrawalLogic";
import { WithdrawMethods } from "./WithdrawMethods";
import { WithdrawAmount } from "./WithdrawAmount";
import { WithdrawCryptoFlow } from "./WithdrawCryptoFlow";
import { WithdrawAccountEmpty } from "./WithdrawAccountEmpty";
import { AddressCompatibilityModal } from "./AddressCompatibilityModal";
import { WithdrawReview } from "./WithdrawReview";
import { WithdrawLoading } from "./WithdrawLoading";
import { WithdrawSuccess } from "./WithdrawSuccess";

import { TopNav } from "@/components/navigation/TopNav";

export function WithdrawFlow() {
    const router = useRouter();
    const logic = useWithdrawalLogic();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBack = () => {
        if (logic.step === "method-selection") {
            router.back();
        } else {
            logic.prevStep();
        }
    };

    const handleReview = () => {
        setIsModalOpen(true);
    };

    const handleConfirmAddress = () => {
        setIsModalOpen(false);
        logic.nextStep();
    };

    if (logic.step === "loading") {
        return <WithdrawLoading />;
    }

    if (logic.step === "success") {
        return (
            <div className="min-h-screen bg-black text-white p-6">
                <WithdrawSuccess
                    amount={logic.amount}
                    address={logic.address}
                    onClose={() => router.push("/")}
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white relative">
            <TopNav title="Withdraw" onBack={handleBack} />


            <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-24 pb-8">
                {logic.step === "method-selection" && (
                    <WithdrawMethods
                        onSelect={(method) => {
                            logic.setMethod(method);
                            logic.nextStep();
                        }}
                    />
                )}

                {logic.step === "amount-input" && (
                    <WithdrawAmount
                        amount={logic.amount}
                        balance="8,269.00"
                        onAmountChange={logic.setAmount}
                        onNext={logic.nextStep}
                        onBack={logic.prevStep}
                    />
                )}

                {logic.step === "crypto-address" && (
                    <WithdrawCryptoFlow
                        amount={logic.amount}
                        token={logic.token}
                        network={logic.network}
                        address={logic.address}
                        onAddressChange={logic.setAddress}
                        onReview={handleReview}
                        onSelectToken={() => { }}
                    />
                )}

                {logic.step === "bank-empty" && (
                    <WithdrawAccountEmpty onAddAccount={() => logic.setStep("method-selection")} />
                )}

                {logic.step === "review" && (
                    <WithdrawReview
                        amount={logic.amount}
                        token={logic.token}
                        network={logic.network}
                        address={logic.address}
                        onWithdraw={logic.nextStep}
                        onBack={logic.prevStep}
                    />
                )}
            </div>

            <AddressCompatibilityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmAddress}
            />
        </div>
    );
}
