'use client'

import { FormHeader } from "@/components/dashboard"
import { useForm } from "react-hook-form"
import { TextInput, SubmitButton, TextareaInput, SelectInput } from "@/components/Forminputs"
import { useState } from "react"
import ImageInput from "@/components/Forminputs/ImageInput"

export default function NewItem() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [imageUrl, setImageUrl] = useState("")

    const categories = [
        {
            label: "Electronics",
            value: "aeriry8899"
        },
        {
            label: "Clothing",
            value: "aeriry8899dsff"
        }
    ]

    const units = [
        {
            label: "Piece",
            value: "piece"
        },
        {
            label: "Kg",
            value: "kg"
        }
    ]

    const brands = [
        {
            label: "HP",
            value: "hp"
        },
        {
            label: "Dell",
            value: "dell"
        }
    ]

    const suppliers = [
        {
            label: "Supplier A",
            value: "supplierA"
        },
        {
            label: "Supplier B",
            value: "supplierB"
        }
    ]
    async function onSubmit(data) {
        data.imageUrl = imageUrl
        setLoading(true)
        const baseUrl = "http://localhost:3000";
        try {
            const response = await fetch(`${baseUrl}/api/items`, {
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
            {/* Header */}
            <FormHeader title="New Item" href="/dashboard/inventory" />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="Warehouse Title" className="w-full" name="warehouseId" register={register} errors={errors} />

                    <SelectInput options={categories} label="Select the Item Category " className="w-full" name="categoryId" register={register} errors={errors} />
                    <TextInput label="Item SKU" className="w-full" name="sku" register={register} errors={errors} />
                    <TextInput label="Item Barcode" name="barcode" register={register} errors={errors} className="w-full" />
                    <TextInput label="Item Quantity" name="qty" register={register} errors={errors} className="w-full" />
                    <SelectInput options={units} label="Select the Item Unit " className="w-full" name="unitId" register={register} errors={errors} />
                    <SelectInput options={brands} label="Select the Item Brand " className="w-full" name="brandId" register={register} errors={errors} />
                    <TextInput label="Buying Price" type="number" name="buyingPrice" register={register} errors={errors} className="w-full" />
                    <TextInput type="number" label="Selling Price" name="sellingPrice" register={register} errors={errors} className="w-full" />
                    <TextInput label="Re-Order Point" type="number" name="reOrderPoint" register={register} errors={errors} className="w-full" />
                    <SelectInput options={suppliers} label="Select the Item Sup plier " className="w-full" name="supplierId" register={register} errors={errors} />
                    <TextInput label="Item Weight in Kgs" type="number" name="weight" register={register} errors={errors} className="w-full" />
                    <TextInput label="Item Dimensions in cm (20 *30 *100)" type="text" name="dimensions" register={register} errors={errors} className="w-full" />
                    <TextInput label="Item Tax Rate in %" type="number" name="taxRate" register={register} errors={errors} className="w-full" />

                    <div className="sm:col-span-2">

                        <TextareaInput label="Item Description" className="w-full" name="description" register={register} errors={errors} />
                        <TextareaInput label="Item Notes" className="w-full" name="notes" register={register} errors={errors} />

                    </div>

                    <ImageInput label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader"  />
                </div>
                <SubmitButton isLoading={loading} title="Item" />

            </form>
            {/* Footer */}
        </div>
    )
}