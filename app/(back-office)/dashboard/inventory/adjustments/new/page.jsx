'use client'

import { FormHeader } from "@/components/dashboard"
import TransferinventoryForm from "@/components/dashboard/TransferinventoryForm"
import AddInventoryForm from "@/components/dashboard/AddInventoryForm"
import { Minus, Plus } from "lucide-react"
import { useState } from "react" 
export default function NewAdjustment() {
    const tabs = [
        {
            title: "Add Stock",
            icon: Plus,
            form:"add"
        },
        {
            title: "Transfer Stock",
            icon: Minus,
            form:"transfer"
        }
    ]

    const [
        activeForm, setActiveForm
    ]=useState("add")

    return (
        <div>
            {/* Header */}
            <FormHeader title="New Adjustment" href="/dashboard/inventory/adjustments" />

            {/* Tabs */}


            <div className="w-full max-w-4xl px-4 py-2  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 shadow rounded">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {
                        tabs.map((tab, i) => {
                            const Icon = tab?.icon
                            return (
                                <li className="mr-2" key={i}>
                                    <button onClick={()=>setActiveForm(tab.form)} className={`${activeForm===tab.form ? "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"}`} aria-current="page">
                                        <Icon className="w-4 h-4 mr-2  text-gray-400  group-hover:text-gray-500 " />
                                        {tab.title}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


            {/* Form */}
            {activeForm==="transfer" && <TransferinventoryForm />}
            {activeForm==="add" && <AddInventoryForm />}
            {/* Footer */}
        </div>
    )
}