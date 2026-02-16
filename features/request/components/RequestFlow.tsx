"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { TopNav } from "@/components/navigation/TopNav";
import { useRequestLogic } from "../hooks/useRequestLogic";
import { RequestInput } from "./RequestInput";
import { RequestSuccess } from "./RequestSuccess";

export function RequestFlow() {
    const router = useRouter();
    const logic = useRequestLogic();

    const handleBack = () => {
        if (logic.step === "input") {
            router.back();
        } else {
            logic.reset();
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white relative">
            <TopNav
                title={logic.step === "input" ? "Request" : "Details"}
                onBack={handleBack}
            />


            <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-24 pb-8">
                {logic.step === "input" && (
                    <RequestInput
                        amount={logic.amount}
                        comment={logic.comment}
                        isCreating={logic.isCreating}
                        onAmountChange={logic.setAmount}
                        onCommentChange={logic.setComment}
                        onCreate={logic.createRequest}
                    />
                )}

                {logic.step === "success" && (
                    <RequestSuccess
                        amount={logic.amount}
                        comment={logic.comment}
                        onClose={() => router.push("/")}
                    />
                )}
            </div>
        </div>
    );
}
