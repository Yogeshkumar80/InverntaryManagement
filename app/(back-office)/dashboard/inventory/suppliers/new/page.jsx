'use client'

import { FormHeader } from "@/components/dashboard"
import { useForm } from "react-hook-form"
import { TextInput, SubmitButton, TextareaInput, SelectInput } from "@/components/Forminputs"
import { useState } from "react"
import { toast } from "react-hot-toast"

export default function NewSupplier() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const selectOptions=[
        {
            label:"Main",
            value:"main"
        },
        {
            label:"Branch",
            value:"branch"
        }
    ]

    async function onSubmit(data) {
        setLoading(true)
        const baseUrl = "http://localhost:3000";
        try {
            const response = await fetch(`${baseUrl}/api/supplier`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            if (response.ok) {
                console.log(response)
                reset()
                setLoading(false)
                toast.success("Warehouse created successfully")
            }
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div>
            {/* Header */}
            <FormHeader title="New Supplier" href="/dashboard/inventory" />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="Supplier Name" className="w-full" name="name" register={register} errors={errors} />
                    <TextInput label="Supplier Phone"  className="w-full" name="phone" register={register} errors={errors} />
                    <TextInput label="Supplier Email"  className="w-full" name="email" register={register} errors={errors} />
                    <TextInput label="Supplier Address"  className="w-full" name="address" register={register} errors={errors} />
                    <TextInput label="Supplier Contact Person"  className="w-full" name="contactPerson" register={register} errors={errors} />
                    <TextInput label="Supplier Code"  className="w-full" name="supplierCode" register={register} errors={errors} />
                    
                    <TextInput label="Supplier TIN"  name="taxID" register={register} errors={errors} />


                        <TextareaInput label="Supplier Payment Terms" className="w-full" name="paymentTerms" register={register} errors={errors} />
                        <TextareaInput label="Supplier Notes" className="w-full" name="notes" register={register} errors={errors} />


                </div>
                <SubmitButton isLoading={loading} title="Supplier" />

            </form>
            {/* Footer */}
        </div>
    )
}