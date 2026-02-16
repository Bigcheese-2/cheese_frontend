"use client";

import { useState } from "react";
import { RequestStep, RequestState } from "../types";

export function useRequestLogic() {
    const [state, setState] = useState<RequestState>({
        step: "input",
        amount: "0.00",
        comment: "",
        isCreating: false,
        error: null,
    });

    const setStep = (step: RequestStep) => setState((s) => ({ ...s, step }));
    const setAmount = (amount: string) => setState((s) => ({ ...s, amount }));
    const setComment = (comment: string) => setState((s) => ({ ...s, comment }));
    const setIsCreating = (isCreating: boolean) => setState((s) => ({ ...s, isCreating }));

    const createRequest = async () => {
        setIsCreating(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsCreating(false);
        setStep("success");
    };

    const reset = () => {
        setState({
            step: "input",
            amount: "0.00",
            comment: "",
            isCreating: false,
            error: null,
        });
    };

    return {
        ...state,
        setAmount,
        setComment,
        createRequest,
        reset,
    };
}
