export type WithdrawStep =
    | "method-selection"
    | "amount-input"
    | "crypto-address"
    | "bank-empty"
    | "review"
    | "loading"
    | "success";

export type WithdrawMethodType = "crypto" | "ngn" | "inr";

export interface WithdrawMethod {
    id: WithdrawMethodType;
    name: string;
    subtitle: string;
    icon: string;
    symbol?: string;
}

export interface WithdrawalState {
    step: WithdrawStep;
    method: WithdrawMethodType | null;
    amount: string;
    address: string;
    token: string;
    network: string;
    isLoading: boolean;
    error: string | null;
}
