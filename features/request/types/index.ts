export type RequestStep = "input" | "success";

export interface RequestState {
    step: RequestStep;
    amount: string;
    comment: string;
    isCreating: boolean;
    error: string | null;
}
