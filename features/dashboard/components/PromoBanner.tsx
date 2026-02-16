"use client";

import Image from "next/image";
import { PromoCarousel } from "@/components/ui/promo-carousel";

const PROMO_CARDS = [
    {
        id: "1",
        title: "Move your crypto to Cheese Pay",
        description: "Deposit from any wallet or exchange and start spending.",
        image: "/images/stackedcoins.svg",
    },
    {
        id: "2",
        title: "Share the cheese 🧀",
        description: "Invite friends and earn points when they sign up.",
        image: "/images/giftbox.svg",
    },
    {
        id: "3",
        title: "Introducing Cheese Pay Card",
        description: "Join the waitlist now!",
        image: "/images/cheesecard.svg",
    },
];

export function PromoBanner() {
    return <PromoCarousel items={PROMO_CARDS} />;
}
