"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useSendLogic } from "../hooks/useSendLogic";
import { SendMethods } from "./SendMethods";
import { SendLinkFlow } from "./SendLinkFlow";
import { SendContacts } from "./SendContacts";
import { SendBankEmpty } from "./SendBankEmpty";
import { SendLoading } from "./SendLoading";
import { SendSuccess } from "./SendSuccess";
import { SendContactAmount } from "./SendContactAmount";
import { SendWalletAmount } from "./SendWalletAmount";
import { TopNav } from "@/components/navigation/TopNav";

export function SendFlow() {
    const router = useRouter();
    const { step, setStep, nextStep, prevStep, ...state } = useSendLogic();

    const handleBack = () => {
        if (step === "method-selection") {
            router.back();
        } else {
            prevStep();
        }
    };

    if (step === "loading") {
        return (
            <div className="fixed inset-0 z-50">
                <SendLoading />
            </div>
        );
    }

    if (step === "success") {
        return (
            <div className="min-h-screen bg-black text-white p-6">
                <SendSuccess
                    amount={state.amount}
                    recipientName={state.recipient?.name}
                    onClose={() => router.push("/")}
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white relative">
            <TopNav title="Send Money" onBack={handleBack} />


            <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-24 pb-8">
                {step === "method-selection" && (
                    <SendMethods
                        onSelect={(method) => {
                            state.setMethod(method);
                            nextStep();
                        }}
                    />
                )}

                {step === "link-flow" && (
                    <SendLinkFlow
                        amount={state.amount}
                        balance="8,269.00"
                        comment={state.comment}
                        onAmountChange={state.setAmount}
                        onCommentChange={state.setComment}
                        onSend={nextStep}
                    />
                )}

                {step === "contacts" && (
                    <SendContacts
                        onSelect={(contact) => {
                            state.setRecipient(contact);
                            nextStep();
                        }}
                    />
                )}

                {step === "contact-amount" && state.recipient && (
                    <SendContactAmount
                        contact={state.recipient}
                        amount={state.amount}
                        balance="8,269.00"
                        comment={state.comment}
                        onAmountChange={state.setAmount}
                        onCommentChange={state.setComment}
                        onSend={nextStep}
                    />
                )}

                {step === "bank-empty" && (
                    <SendBankEmpty onAddMoney={() => router.push("/add-money")} />
                )}

                {step === "wallet-amount" && (
                    <SendWalletAmount
                        amount={state.amount}
                        balance="8,269.00"
                        onAmountChange={state.setAmount}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
            </div>
        </div>
    );
}
