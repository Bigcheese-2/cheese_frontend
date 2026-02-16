export type SendStep =
    | "method-selection"
    | "link-flow"
    | "contacts"
    | "contact-amount"
    | "bank-empty"
    | "wallet-amount"
    | "loading"
    | "success";

export type SendMethodType = "link" | "contacts" | "bank" | "wallet";

export interface Contact {
    id: string;
    name: string;
    handle: string;
    avatar?: string;
}

export interface SendState {
    step: SendStep;
    method: SendMethodType | null;
    amount: string;
    recipient: Contact | null;
    comment: string;
    isLoading: boolean;
    error: string | null;
}
