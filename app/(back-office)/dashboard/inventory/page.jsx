'use client'
import React from "react";
import {FixedHeader} from "@/components/dashboard";
import { Award, Boxes, Component, ScrollText, Shirt, LayoutGrid, LayoutPanelTop, Slack, Warehouse, Scale, Diff, Factory} from "lucide-react";
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
            icon:LayoutGrid,
            description:"Create standalone items and services that you buy and sell",
            link:"/dashboard/inventory/items/new",
            linkTitle:"New Item",
            enable:true
        },
        {
            title:"Categories",
            icon:LayoutPanelTop,
            description:"Bundle different items together and sell them as kits",
            link:"/dashboard/inventory/categories/new",
            linkTitle:"New Category",
            enable:true
        },
        {
            title:"Brands",
            icon:Slack,
            description:"Tweak your item prices for specific contacts or transactions",
            link:"/dashboard/inventory/brands/new",
            linkTitle:"New Brand",
            enable:true
        },
        {
            title:"Warehouse",
            icon:Warehouse,
            description:"Tweak your item prices for specific contacts or transactions",
            link:"/dashboard/inventory/warehouse/new",
            linkTitle:"New Warehouse",
            enable:true
        }
        ,     {
            title:"Units",
            icon:Scale,
            description:"Tweak your item prices for specific contacts or transactions",
            link:"/dashboard/inventory/units/new",
            linkTitle:"New Unit",
            enable:true
        },
        {
            title:"Inventory Adjustments",
            icon:Diff,
            description:"Transfer stock from the main Warehouse to Branches",
            link:"/dashboard/inventory/adjustments/new",
            linkTitle:"New Adjustment",
            enable:true
        }
        ,{
            title:"Suppliers",
            icon:Factory,
            description:"Transfer stock from the main Warehouse to Branches",
            link:"/dashboard/inventory/suppliers/new",
            linkTitle:"New Supplier",
            enable:true
        }
    ]
    return(
        <div>
            <FixedHeader newLink="inventory/items/new"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-4 py-8 px-16 gap-6">

                {optionCards?.map((optionCard,index)=>{
                    return(
                        <OptionCard key={index} optionData={optionCard}/>
                    )
                })}
            </div>
        </div>
    )
}
