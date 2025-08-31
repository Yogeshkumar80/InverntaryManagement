'use client'
import { Check, CheckCircle2 } from "lucide-react";
import React from "react";
import Link from "next/link";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./inventorySummaryCard";

export default function SalesOverview(){
    const salesActivity= [
        {
            title:"To be Packed",
            number:10,
            unit:"Qty",
            href:"#",
            color:"text-blue-600"
            
        },
        {
            title:"To be Shipped",
            number:0,
            unit:"Pkgs",
            href:"#",
            color:"text-red-600"
            
        },
        {
            title:"To be Delivered",
            number:0,
            unit:"Pkgs",
            href:"#",
            color:"text-green-600"
            
        },
        {
            title:"To be Invoiced",
            number:0,
            unit:"Qty",
            href:"#",
            color:"text-orange-600"
            
        },

    ]

    const inventorySummary=[
        {
            title:"Quantity in Hand",
         number:10,
         href:"#",
        },
        {
            title:"Quantity to be recieved",
            number:0,
            href:"#",
           }

    ]
    return(
        <div className="bg-blue-50 border-b  border-slate-300 px-3 py-4 grid grid-cols-12 gap-4">
          <div className="col-span-8 border-r border-slate-300  p-8">
            <h2 className="mb-6 text-xl">Sales Activity</h2>
            <div className="pr-8 grid grid-cols-4 gap-4">
                {
                    salesActivity.map((item, i)=>{
                        return(
                           <InventorySummaryCard item={item} key={i}/>
                        )
                    })
                }
            </div>
          </div>
          <div className="col-span-4 p-8">
          <h2 className="mb-6 text-xl">Inventory Summary</h2>

          <div>
            {
                inventorySummary?.map((item, i)=>{
                    return(
                      <SalesActivityCard item={item} key={i}/>
                    )
                })
            }
          </div>

          </div>

        </div>
    )
}
