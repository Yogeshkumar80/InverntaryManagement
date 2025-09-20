'use client'
import { UploadDropzone } from "@/lib/uploadthing"
import Image from "next/image"
import { Pencil } from "lucide-react"
import { useState } from "react"

export default function ImageInput({label, imageUrl="", setImageUrl, endpoint="imageUploader", className="col-span-full"}) {
    return (
        <div className={className}>
        <div className="flex justify-between items-center mb-4">
            <label
                htmlFor={label}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            {imageUrl && (
                <button
                    onClick={() => setImageUrl("")}
                    type="button"
                    className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
                >
                    <Pencil className="w-5 h-5" />
                    <span>Change Image</span>
                </button>
            )}
        </div>
        {imageUrl ? (
            <Image
                src={imageUrl}
                alt="Item image"
                width={1000}
                height={667}
                className="w-full h-64 object-cover"
            />
        ) : (
            <UploadDropzone
                className="w-full h-64 object-cover bg-blue-300"
                endpoint={endpoint}
                onClientUploadComplete={(res) => {
                    setImageUrl(res[0].appUrl);
                    // Do something with the response
                    console.log("Files: ", res);
                    console.log("Upload Completed");
                }}
                onUploadError={(error) => {
                    // Do something with the error.
                    console.log(`ERROR! ${error.message}`);
                }}
            />
        )}
    </div>
    )
}