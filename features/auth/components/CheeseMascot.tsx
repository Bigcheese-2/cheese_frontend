"use client";

import Image from "next/image";

type MascotVariant = "splash" | "welcome" | "signin" | "success";

interface CheeseMascotProps {
    variant: MascotVariant;
    className?: string;
    priority?: boolean;
}

const mascotImages: Record<MascotVariant, string> = {
    splash: "/images/splashscreen-img.svg",
    welcome: "/images/welcome-screen-img.svg",
    signin: "/images/signup-signin-img.svg",
    success: "/images/walle-created.svg",
};

/**
 * CheeseMascot component
 * 
 * A clean, reusable component for the playful cheese wedge mascot.
 * It uses descriptive props and maintains a feature-based structure.
 */
export function CheeseMascot({ variant, className = "", priority = false }: CheeseMascotProps) {
    const src = mascotImages[variant];

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <Image
                src={src}
                alt={`Cheese Wallet Mascot - ${variant}`}
                width={390}
                height={390}
                priority={priority}
                className="object-contain w-full h-auto max-h-[400px]"
            />
        </div>
    );
}
