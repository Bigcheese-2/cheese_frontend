"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/button";
import { KycCountrySelection } from "./KycCountrySelection";
import { KycNameInput } from "./KycNameInput";
import { KycDocumentType } from "./KycDocumentType";
import { KycNinUpload } from "./KycNinUpload";

export type KycStep = "residence" | "name" | "document-type" | "upload";

export function KycFlow() {
    const router = useRouter();
    const [step, setStep] = useState<KycStep>("residence");
    const [formData, setFormData] = useState({
        country: "Nigeria",
        firstName: "",
        lastName: "",
        documentType: "National ID Card",
        nin: "",
        documentImage: null as string | null,
    });

    const handleBack = () => {
        if (step === "residence") {
            router.back();
        } else if (step === "name") {
            setStep("residence");
        } else if (step === "document-type") {
            setStep("name");
        } else if (step === "upload") {
            setStep("document-type");
        }
    };

    const updateFormData = (data: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white p-6">

            <header className="flex items-center gap-4 mb-8 -ml-2">
                <BackButton onClick={handleBack} />
                <h1 className="text-xl font-display text-white">Create account</h1>
            </header>


            <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar">
                {step === "residence" && (
                    <KycCountrySelection
                        value={formData.country}
                        onChange={(country: string) => updateFormData({ country })}
                        onNext={() => setStep("name")}
                    />
                )}
                {step === "name" && (
                    <KycNameInput
                        firstName={formData.firstName}
                        lastName={formData.lastName}
                        onChange={(data: { firstName?: string; lastName?: string }) => updateFormData(data)}
                        onNext={() => setStep("document-type")}
                    />
                )}
                {step === "document-type" && (
                    <KycDocumentType
                        value={formData.documentType}
                        onChange={(documentType: string) => updateFormData({ documentType })}
                        onNext={() => setStep("upload")}
                    />
                )}
                {step === "upload" && (
                    <KycNinUpload
                        nin={formData.nin}
                        documentImage={formData.documentImage}
                        onChange={(data: { nin?: string; documentImage?: string | null }) => updateFormData(data)}
                        onSubmit={() => {
                            router.push("/dashboard");
                        }}
                    />
                )}
            </div>
        </div>
    );
}
