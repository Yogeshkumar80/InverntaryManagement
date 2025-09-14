'use client'
import FixedHeader from "@/components/dashboard/FixedHeader"
import { Award, Boxes, Component, ScrollText, Shirt } from "lucide-react"
import OptionCard from "@/components/dashboard/OptionCard"
export default function Items(){
    const optionCards=[
        {
            title:"Item Groups",
            icon:Boxes,
            description:"Create multiple variants of the same item using Item Groups",
            link:"/new",
            linkTitle:"New Item Group",
            enable:true
        },
        {
            title:"Item",
            icon:Shirt,
            description:"Create standalone items and services that you buy and sell",
            link:"/new",
            linkTitle:"New Item",
            enable:true
        },
        {
            title:"Composite Items",
            icon:Component,
            description:"Bundle different items together and sell them as kits",
            link:"/new",
            linkTitle:"New Composite Item",
            enable:true
        },
        {
            title:"Price Lists",
            icon:ScrollText,
            description:"Tweak your item prices for specific contacts or transactions",
            link:"/new",
            linkTitle:"New Price List",
            enable:true
        }
    ]
    return(
        <div>
            <FixedHeader newLink="/dashboard/inventory/items/new"/>
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
