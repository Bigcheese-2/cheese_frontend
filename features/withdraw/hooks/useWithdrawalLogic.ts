"use client";

import { useState } from "react";
import { WithdrawStep, WithdrawMethodType, WithdrawalState } from "../types";

export function useWithdrawalLogic() {
    const [state, setState] = useState<WithdrawalState>({
        step: "method-selection",
        method: null,
        amount: "0.00",
        address: "",
        token: "USDC",
        network: "Polygon",
        isLoading: false,
        error: null,
    });

    const setStep = (step: WithdrawStep) => setState((s) => ({ ...s, step }));
    const setMethod = (method: WithdrawMethodType) => setState((s) => ({ ...s, method }));
    const setAmount = (amount: string) => setState((s) => ({ ...s, amount }));
    const setAddress = (address: string) => setState((s) => ({ ...s, address }));

    const nextStep = () => {
        switch (state.step) {
            case "method-selection":
                if (state.method === "crypto") {
                    setStep("amount-input");
                } else {
                    setStep("bank-empty");
                }
                break;
            case "amount-input":
                setStep("crypto-address");
                break;
            case "crypto-address":
                setStep("review");
                break;
            case "review":
                setStep("loading");
                setTimeout(() => {
                    setStep("success");
                }, 3000);
                break;
            default:
                break;
        }
    };

    const prevStep = () => {
        switch (state.step) {
            case "amount-input":
                setStep("method-selection");
                break;
            case "crypto-address":
                setStep("amount-input");
                break;
            case "bank-empty":
                setStep("method-selection");
                break;
            case "review":
                setStep("crypto-address");
                break;
            default:
                break;
        }
    };

    return {
        ...state,
        setStep,
        setMethod,
        setAmount,
        setAddress,
        nextStep,
        prevStep,
    };
}
