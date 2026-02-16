import { SignupFlow } from "@/features/auth/components/SignupFlow";

/**
 * SignupPage
 * 
 * The main signup entry point.
 * Wraps the feature-based SignupFlow within its route.
 */
export default function SignupPage() {
    return (
        <div className="flex flex-col flex-1 h-full py-8">
            <SignupFlow />
        </div>
    );
}
