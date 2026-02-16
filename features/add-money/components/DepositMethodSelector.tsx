"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface DepositMethodSelectorProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function DepositMethodSelector({ isOpen, onClose, onConfirm }: DepositMethodSelectorProps) {
    const [subStep, setSubStep] = useState<"selection" | "confirmation">("selection");
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [dragY, setDragY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);


    const handleBack = () => {
        if (subStep === "confirmation") {
            setSubStep("selection");
        } else {
            onClose();
        }
    };


    const onTouchStart = (e: React.TouchEvent) => {
        setStartY(e.touches[0].clientY);
        setIsDragging(true);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;
        if (deltaY > 0) {
            setDragY(deltaY);
        }
    };

    const onTouchEnd = () => {
        setIsDragging(false);
        if (dragY > 100) {
            onClose();
        }
        setDragY(0);
    };


    const onMouseDown = (e: React.MouseEvent) => {
        setStartY(e.clientY);
        setIsDragging(true);

        document.body.style.userSelect = 'none';
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const deltaY = e.clientY - startY;
        if (deltaY > 0) {
            setDragY(deltaY);
        }
    };

    const onMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            if (dragY > 100) {
                onClose();
            }
            setDragY(0);
            document.body.style.userSelect = '';
        }
    };


    React.useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [isDragging, dragY]);

    if (!isOpen) return null;

    return (
        <div className="absolute inset-x-0 bottom-0 z-50 flex flex-col justify-end overflow-hidden h-full pointer-events-none">

            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 pointer-events-auto"
                onClick={onClose}
            />


            <div
                className="relative bg-zinc-900 rounded-t-[40px] p-6 pt-2 pb-10 flex flex-col gap-6 animate-in slide-in-from-bottom duration-500 pointer-events-auto shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
                style={{
                    transform: `translateY(${dragY}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
            >

                <div
                    className="w-full flex justify-center py-4 cursor-grab active:cursor-grabbing touch-none px-4"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                >
                    <div className="w-16 h-1.5 bg-zinc-800/80 rounded-full" />
                </div>


                <div className="flex items-center">
                    <BackButton onClick={handleBack} />
                </div>

                {subStep === "selection" ? (
                    <>
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold text-white">Select a deposit method</h2>
                            <p className="text-zinc-500 text-sm">Networks affect fees and compatibility</p>
                        </div>

                        <div className="space-y-4">

                            <div
                                onClick={() => setSubStep("confirmation")}
                                className="flex items-center justify-between p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-[32px] cursor-pointer hover:bg-zinc-800 transition-all border-none"
                            >
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-semibold text-lg">USDC on Polygon</span>
                                        <span className="bg-[#E4F9E4] text-[#008751] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">Free</span>
                                    </div>
                                    <span className="text-zinc-500 text-sm">Recommended option for deposits</span>
                                </div>


                                <div className="w-12 h-12 rounded-full bg-[#8247E5]/20 flex items-center justify-center relative">
                                    <div className="w-8 h-8 rounded-full bg-[#8247E5] flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                            <path d="M16.457 7.942l-5.69 3.284v6.568l5.69-3.284v-6.568zm1.006 8.309l-6.696 3.865-6.696-3.865v-7.73l6.696-3.865 6.696 3.865v7.73z" />
                                        </svg>
                                    </div>

                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-zinc-900 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-[#2775CA] flex items-center justify-center">
                                            <span className="text-white text-[8px] font-bold">$</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center justify-between p-6 bg-transparent border border-zinc-800 rounded-[32px] cursor-pointer hover:bg-zinc-800/30 transition-all">
                                <span className="text-zinc-300 font-medium">Choose another token or network</span>
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 border border-zinc-900 z-30 flex items-center justify-center text-[10px] shadow-sm font-bold text-white">B</div>
                                    <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-900 z-20 flex items-center justify-center text-[10px] shadow-sm font-bold text-zinc-300">A</div>
                                    <div className="w-6 h-6 rounded-full bg-blue-400 border border-zinc-900 z-10 flex items-center justify-center text-[10px] shadow-sm font-bold text-white">O</div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold text-white">Select a deposit method</h2>
                            <p className="text-zinc-500 text-sm">Networks affect fees and compatibility</p>
                        </div>

                        <div className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-[32px]">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-semibold text-lg">USDC on Polygon</span>
                                        <span className="bg-[#E4F9E4] text-[#008751] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">Free</span>
                                    </div>
                                    <span className="text-zinc-500 text-sm">Recommended option for deposits</span>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#8247E5]/20 flex items-center justify-center relative">
                                    <div className="w-8 h-8 rounded-full bg-[#8247E5] flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                            <path d="M16.457 7.942l-5.69 3.284v6.568l5.69-3.284v-6.568zm1.006 8.309l-6.696 3.865-6.696-3.865v-7.73l6.696-3.865 6.696 3.865v7.73z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-zinc-900 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-[#2775CA] flex items-center justify-center">
                                            <span className="text-white text-[8px] font-bold">$</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <p className="text-zinc-500 text-center text-sm px-8">
                                Sending funds via any other network will result in a permanent loss.
                            </p>

                            <div
                                className="flex items-center justify-center gap-3 cursor-pointer group"
                                onClick={() => setIsConfirmed(!isConfirmed)}
                            >
                                <div className={cn(
                                    "w-6 h-6 rounded border-2 flex items-center justify-center transition-all",
                                    isConfirmed ? "bg-cheese-yellow border-cheese-yellow" : "border-zinc-700 group-hover:border-zinc-500"
                                )}>
                                    {isConfirmed && <Check className="w-4 h-4 text-black stroke-[3px]" />}
                                </div>
                                <span className="text-white font-semibold">I understand</span>
                            </div>

                            <Button
                                disabled={!isConfirmed}
                                onClick={onConfirm}
                                className={cn(
                                    "w-full h-16 rounded-[32px] font-bold text-lg transition-all",
                                    isConfirmed
                                        ? "bg-white text-black hover:bg-zinc-200 active:scale-95"
                                        : "bg-zinc-800 text-zinc-600 border-none cursor-not-allowed"
                                )}
                            >
                                Continue
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
