"use client";

import { useState } from "react";
import { SendStep, SendMethodType, SendState, Contact } from "../types";

export function useSendLogic() {
    const [state, setState] = useState<SendState>({
        step: "method-selection",
        method: null,
        amount: "0.00",
        recipient: null,
        comment: "",
        isLoading: false,
        error: null,
    });

    const setStep = (step: SendStep) => setState((s) => ({ ...s, step }));
    const setMethod = (method: SendMethodType) => setState((s) => ({ ...s, method }));
    const setAmount = (amount: string) => setState((s) => ({ ...s, amount }));
    const setRecipient = (recipient: Contact | null) => setState((s) => ({ ...s, recipient }));
    const setComment = (comment: string) => setState((s) => ({ ...s, comment }));

    const nextStep = () => {
        switch (state.step) {
            case "method-selection":
                if (state.method === "link") setStep("link-flow");
                else if (state.method === "contacts") setStep("contacts");
                else if (state.method === "bank") setStep("bank-empty");
                else if (state.method === "wallet") setStep("wallet-amount");
                break;
            case "contacts":
                setStep("contact-amount");
                break;
            case "link-flow":
            case "contact-amount":
            case "wallet-amount":
                setStep("loading");
                setTimeout(() => setStep("success"), 3000);
                break;
            default:
                break;
        }
    };

    const prevStep = () => {
        switch (state.step) {
            case "link-flow":
            case "contacts":
            case "bank-empty":
                setStep("method-selection");
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
        setRecipient,
        setComment,
        nextStep,
        prevStep,
    };
}
