"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface Card {
    id: string;
    title: string;
    description: string;
    image: string;
}

export const PromoCarousel = ({
    items,
}: {
    items: Card[];
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onScroll() {
            if (ref.current) {
                const scrollLeft = ref.current.scrollLeft;
                const cardWidth = ref.current.offsetWidth * 0.85;
                const gap = 16;
                const newActiveCard = Math.round(scrollLeft / (cardWidth + gap));
                setActiveCard(newActiveCard);
            }
        }

        ref.current?.addEventListener("scroll", onScroll);
        return () => ref.current?.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="px-4 mb-8">
            <div
                ref={ref}
                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={cn(
                            "min-w-[85%] snap-start shrink-0 bg-[#1C1C1E] w-[360px] rounded-2xl p-6 flex items-center justify-between transition-all duration-300",
                            activeCard === index
                                ? "scale-100 opacity-100"
                                : "scale-95 opacity-70"
                        )}
                    >
                        <div className="flex-1 pr-4">
                            <h3 className="text-white font-bold text-[17px] mb-2 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-[13px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={80}
                                height={80}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (ref.current) {
                                const cardWidth = ref.current.offsetWidth * 0.85;
                                const gap = 16;
                                ref.current.scrollTo({
                                    left: index * (cardWidth + gap),
                                    behavior: "smooth",
                                });
                            }
                        }}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            activeCard === index
                                ? "w-6 bg-white"
                                : "w-1.5 bg-zinc-600"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};
