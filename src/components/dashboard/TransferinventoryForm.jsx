'use client'

import { FormHeader } from "@/components/dashboard"
import { useForm } from "react-hook-form"
import { TextInput, SubmitButton, TextareaInput, SelectInput } from "@/components/Forminputs"
import { useState } from "react"

export default function TransferinventoryForm() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const branches=[
        {
            label:"Branch A",
            value:"branchA"
        },
        {
            label:"Branch B",
            value:"branchB"
        }
    ]

    async function onSubmit(data) {
        setLoading(true)
        const baseUrl = "http://localhost:3000";
        try {
            const response = await fetch(`${baseUrl}/api/adjustments/transfer`, {
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
            }
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput label="Reference Number" type="referenceNumber" name="referenceNumber" register={register} errors={errors} />

                   <TextInput label="Enter Quantity of Stock Transfer" type="number"  name="transferStockQty" register={register} errors={errors} />
                    <SelectInput options={branches} name="givingWarehouseId" label="Select the Warehouse that will give the stock" className="w-full" register={register} errors={errors} />

                    <SelectInput options={branches} name="warehouseId" label="Select the Warehouse that will receive the stock" className="w-full" register={register} errors={errors} />
                    {/* <TextInput label="Adjustment Location"  name="location" register={register} errors={errors} /> */}

                    <div className="sm:col-span-2">

                        <TextareaInput label="Adjustment Notes" className="w-full" name="notes" register={register} errors={errors} />
                    </div>


                </div>
                <SubmitButton isLoading={loading} title="Adjustment" />

            </form>
            {/* Footer */}
        </div>
    )
}