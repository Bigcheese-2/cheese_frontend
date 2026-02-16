"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps extends React.ComponentProps<typeof Button> {
    onClick?: () => void;
    forceHome?: boolean;
}

export function BackButton({ onClick, className, forceHome, ...props }: BackButtonProps) {
    const router = useRouter();
    const pathname = usePathname();

    const MAIN_NAV_SCREENS = ["/cards", "/scan", "/points", "/notifications", "/verification", "/profile/edit"];

    const handleBack = () => {
        if (onClick) {
            onClick();
            return;
        }

        // If forceHome is true OR current path is a main nav screen (and not dashboard)
        if (forceHome || (MAIN_NAV_SCREENS.includes(pathname) && pathname !== "/dashboard")) {
            router.push("/dashboard");
        } else {
            router.back();
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className={cn("text-white -ml-2 hover:bg-zinc-900 active:scale-95 transition-all outline-none focus:ring-0", className)}
            {...props}
        >
            <ChevronLeft className="w-6 h-6" />
        </Button>
    );
}
