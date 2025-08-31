'use client'
import React from "react";
import {FixedHeader} from "@/components/dashboard";
import { Shirt } from "lucide-react";
import Link from "next/link";
import OptionCard from "@/components/dashboard/OptionCard";


export default function Inventory(){
    const optionCards=[
        {
            title:"Item",
            icon:Shirt,
            description:"",
            link:"/new",
            linkTitle:"New Item",
            enable:true
        }
    ]
    return(
        <div>
            <FixedHeader/>
            <div className="grid grid-cols-1 lg:grid-cols-2 m-4 py-8 px-16 gap-6">

                {optionCards?.map((optionCard,index)=>{
                    return(
                        <OptionCard key={index} optionData={optionCard}/>
                    )
                })}
            </div>
        </div>
    )
}
