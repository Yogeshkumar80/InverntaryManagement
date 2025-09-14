'use client'

import { FormHeader } from "@/components/dashboard"
import { useForm } from "react-hook-form"
import { TextInput, SubmitButton, TextareaInput } from "@/components/Forminputs"
import { useState } from "react"

export default function NewWarehouse() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

   async function onSubmit(data) {
    setLoading(true)
    const baseUrl = "http://localhost:3000";
       try{
        const response = await fetch(`${baseUrl}/api/warehouse`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        if(response.ok){
            console.log(response)
            reset()
            setLoading(false)
        }
       }
       catch(error){
        console.log(error)
        setLoading(false)
       }
    }
    return (
        <div>
            {/* Header */}
            <FormHeader title="New Warehouse" href="/dashboard/inventory" />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="Warehouse Title" className="w-full" name="title" register={register} errors={errors} />
                    <TextInput label="Warehouse Location" className="w-full" name="location" register={register} errors={errors} />
                    {/* <TextInput label="Warehouse Type" className="w-full" name="type" register={register} errors={errors} /> */}
                    <div className="sm:col-span-2">

                        <TextareaInput label="Warehouse Description" className="w-full" name="description" register={register} errors={errors} />
                    </div>
                  

                </div>
                <SubmitButton isLoading={loading} title="Warehouse" />

            </form>
            {/* Footer */}
        </div>
    )
}