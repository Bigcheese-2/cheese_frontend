"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, CheckCircle2, X } from "lucide-react";

interface KycNinUploadProps {
    nin: string;
    documentImage: string | null;
    onChange: (data: { nin?: string; documentImage?: string | null }) => void;
    onSubmit: () => void;
}

export function KycNinUpload({ nin, documentImage, onChange, onSubmit }: KycNinUploadProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            onChange({ documentImage: url });
        }
    };

    const isComplete = nin.trim().length >= 10 && documentImage !== null;

    return (
        <div className="flex flex-col flex-1">
            <div className="space-y-2 mb-8">
                <h2 className="text-2xl font-display text-white">
                    National Identification Number
                </h2>
                <p className="text-zinc-400 text-sm">
                    Enter your NIN and upload a clear photo of your ID
                </p>
            </div>

            <div className="space-y-8">
                <div className="space-y-2">
                    <label htmlFor="nin" className="text-sm font-medium text-zinc-400 ml-1">NIN</label>
                    <Input
                        id="nin"
                        placeholder="12345678901"
                        value={nin}
                        onChange={(e) => onChange({ nin: e.target.value })}
                        className="w-full h-14 bg-input-bg border-zinc-800 rounded-lg text-white focus:ring-cheese-yellow"
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-sm font-medium text-zinc-400 ml-1">ID Card (Front)</label>
                    {!documentImage ? (
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="w-full aspect-[1.6/1] bg-zinc-900/50 border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-4 transition-colors hover:bg-zinc-900">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                                    <Camera className="w-6 h-6 text-zinc-400" />
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-medium">Take a photo</p>
                                    <p className="text-xs text-zinc-500 mt-1">or browse files to upload</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full aspect-[1.6/1] rounded-2xl overflow-hidden border border-zinc-800">
                            <img
                                src={documentImage}
                                alt="ID Document"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    <CheckCircle2 className="w-10 h-10 text-cheese-yellow" />
                                    <span className="text-white font-bold text-sm">Uploaded successfully</span>
                                </div>
                            </div>
                            <button
                                onClick={() => onChange({ documentImage: null })}
                                className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-auto pb-6">
                <Button
                    onClick={onSubmit}
                    disabled={!isComplete}
                    className="w-full h-16 bg-white text-black font-bold rounded-[32px] hover:bg-zinc-200 transition-all active:scale-95 text-lg disabled:opacity-50 disabled:active:scale-100"
                >
                    Submit for verification
                </Button>
            </div>
        </div>
    );
}
