import { LoginForm } from "@/features/auth/components/LoginForm";

/**
 * LoginPage
 * 
 * The main login entry point.
 * Wraps the feature-based LoginForm within its route.
 */
export default function LoginPage() {
    return (
        <div className="flex flex-col flex-1 h-full py-8">
            <LoginForm />
        </div>
    );
}
