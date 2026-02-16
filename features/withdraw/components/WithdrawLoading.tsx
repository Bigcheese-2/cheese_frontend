"use client";

import React from "react";
import Image from "next/image";

export function WithdrawLoading() {
    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center animate-in fade-in duration-500">
            <div className="relative group">

                <div className="absolute inset-0 bg-cheese-yellow/20 blur-2xl rounded-full animate-pulse"></div>


                <div className="relative animate-bounce duration-1000 ease-in-out">
                    <Image
                        src="/images/splashscreen-img.svg"
                        alt="Loading..."
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
