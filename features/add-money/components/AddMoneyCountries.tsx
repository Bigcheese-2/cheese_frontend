"use client";

import React, { useState } from "react";
import { Search, ChevronRight, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Country {
    id: string;
    name: string;
    currency: string;
    icon: React.ReactNode;
}

interface AddMoneyCountriesProps {
    onSelectCountry: (country: string) => void;
    onSelectCrypto: () => void;
}

const countries: Country[] = [
    {
        id: "nigeria",
        name: "Nigeria",
        currency: "NGN",
        icon: (
            <div className="w-10 h-10 rounded-full overflow-hidden flex shadow-sm border border-zinc-800">
                <div className="flex-1 bg-[#008751]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#008751]" />
            </div>
        )
    },
    {
        id: "india",
        name: "India",
        currency: "INR",
        icon: (
            <div className="w-10 h-10 rounded-full overflow-hidden flex flex-col shadow-sm border border-zinc-800">
                <div className="flex-1 bg-[#FF9933]" />
                <div className="flex-1 bg-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full border border-[#000080]" />
                </div>
                <div className="flex-1 bg-[#128807]" />
            </div>
        )
    }
];

export function AddMoneyCountries({ onSelectCountry, onSelectCrypto }: AddMoneyCountriesProps) {
    const [search, setSearch] = useState("");

    const filteredCountries = countries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.currency.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold text-white">Where to add money from?</h2>
            </div>


            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <Input
                    placeholder="Search country"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-12 h-14 bg-zinc-900 border-zinc-800 rounded-2xl text-white placeholder:text-zinc-500 focus:ring-cheese-yellow/20"
                />
            </div>

            <div className="space-y-3">

                {(!search || "crypto deposit".includes(search.toLowerCase())) && (
                    <div
                        onClick={onSelectCrypto}
                        className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer hover:bg-zinc-900 transition-all active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-cheese-yellow flex items-center justify-center shadow-lg shadow-cheese-yellow/5">
                                <Wallet className="w-6 h-6 text-black" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold">Crypto Deposit</span>
                                <span className="text-zinc-500 text-sm">Use an exchange or your wallet</span>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-zinc-600" />
                    </div>
                )}


                {filteredCountries.map((country) => (
                    <div
                        key={country.id}
                        onClick={() => onSelectCountry(country.id)}
                        className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer hover:bg-zinc-900 transition-all active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                {country.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold">{country.name}</span>
                                <span className="text-zinc-500 text-sm uppercase">{country.currency}</span>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-zinc-600" />
                    </div>
                ))}

                {filteredCountries.length === 0 && search && (
                    <div className="flex flex-col items-center justify-center py-12 text-center text-zinc-500 gap-2">
                        <span className="text-4xl">🔎</span>
                        <p>No countries found matching "{search}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}
