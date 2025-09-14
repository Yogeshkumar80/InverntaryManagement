'use client'
import React from "react";
import {FixedHeader} from "@/components/dashboard";
import { Award, Boxes, Component, ScrollText, Shirt } from "lucide-react";
import Link from "next/link";
import OptionCard from "@/components/dashboard/OptionCard";


export default function Inventory(){
    const optionCards=[
        // {
        //     title:"Item Groups",
        //     icon:Boxes,
        //     description:"Create multiple variants of the same item using Item Groups",
        //     link:"/new",
        //     linkTitle:"New Item Group",
        //     enable:true
        // },
        {
            title:"Item",
            icon:Shirt,
            description:"Create standalone items and services that you buy and sell",
            link:"/dashboard/inventory/items/new",
            linkTitle:"New Item",
            enable:true
        },
        {
            title:"Categories",
            icon:Boxes,

            description:"Bundle different items together and sell them as kits",
            link:"/dashboard/inventory/categories/new",
            linkTitle:"New Category",
            enable:true
        },
        {
            title:"Brands",
            icon:ScrollText,
            description:"Tweak your item prices for specific contacts or transactions",
            link:"/dashboard/inventory/brands/new",
            linkTitle:"New Brand",
            enable:true
        },
        {
            title:"Warehouse",
            icon:ScrollText,
            description:"Tweak your item prices for specific contacts or transactions",
            link:"/dashboard/inventory/warehouse/new",
            linkTitle:"New Warehouse",
            enable:true
        }
        ,     {
            title:"Units",
            icon:Component,
            description:"Tweak your item prices for specific contacts or transactions",
            link:"/dashboard/inventory/units/new",
            linkTitle:"New Unit",
            enable:true
        }
    ]
    return(
        <div>
            <FixedHeader newLink="inventory/items/new"/>
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
