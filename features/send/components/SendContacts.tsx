"use client";

import React, { useState } from "react";
import { Search, ChevronRight, Check, Heart } from "lucide-react";
import { Contact } from "../types";

interface SendContactsProps {
    onSelect: (contact: Contact) => void;
}

const mockContacts: Contact[] = [
    { id: "1", name: "Jane Doe", handle: "@sudoname" },
];

export function SendContacts({ onSelect }: SendContactsProps) {
    const [search, setSearch] = useState("");

    const filteredContacts = mockContacts.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.handle.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full space-y-6 animate-in slide-in-from-right duration-500">

            <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-cheese-yellow transition-colors" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search contact.."
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-3xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-cheese-yellow/50 transition-all text-sm"
                />
            </div>

            <div className="space-y-4">
                <h3 className="text-white font-bold text-base px-2">Your contacts</h3>

                <div className="space-y-3">
                    {filteredContacts.map((contact) => (
                        <button
                            key={contact.id}
                            onClick={() => onSelect(contact)}
                            className="w-full flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer active:scale-[0.98] transition-all text-left group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-cheese-yellow flex items-center justify-center text-black font-bold text-lg">
                                    {contact.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-white font-semibold text-lg">{contact.name}</div>
                                        <Check className="w-4 h-4 text-emerald-400" />
                                        <div className="text-emerald-400">⚡️</div>
                                    </div>
                                    <div className="text-zinc-500 text-sm font-mono tracking-tight">{contact.handle}</div>
                                </div>
                            </div>
                            <ChevronRight className="w-6 h-6 text-zinc-500 group-hover:translate-x-1 transition-transform" />
                        </button>
                    ))}

                    {filteredContacts.length === 0 && (
                        <div className="text-center py-12 text-zinc-500 italic">
                            No contacts found for "{search}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
