'use client'
import { Check, CheckCircle2 } from "lucide-react";
import React from "react";
import Link from "next/link";

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
    return(
        <div className="bg-blue-50 border-b  border-slate-300 px-3 py-4 grid grid-cols-12 gap-4">
          <div className="col-span-8 border-r border-slate-300  p-8">
            <h2 className="mb-6 text-xl">Sales Activity</h2>
            <div className="pr-8 grid grid-cols-4 gap-4">
                {
                    salesActivity.map((item, i)=>{
                        return(
                            <Link href={item.href} key={i} className="rounded-lg cursor-pointer flex items-center justify-center flex-col gap-3 transition-all duration-300 border border-slate-400 hover:border-blue-400 bg-white p-8"> 
                            <h4 className={`font-semibold text-3xl ${item.color}`}>{item.number}</h4>
                            <small className={`text-slate-500 `}>{item.unit}</small>
                             <div className="flex items-center space-x-2 text-slate-500 ">
                        <CheckCircle2 className="w-4 h-4"/>
                        <span className="uppercase text-xs">{item.title}</span>


                     </div>
                </Link>
                        )
                    })
                }
            </div>
          </div>
          <div className="col-span-4 p-8">
          <h2 className="mb-6 text-xl">Inventory Summary</h2>

          <div>
            <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-4 py-2 cursor-pointer flex items-center  gap-3 transition-all duration-300">
                <h2 className="text-slate-500 uppercase text-sm">Quantity in Hand</h2>
                <span className="text-2xl">10</span>              
            </div>
          </div>

          </div>

        </div>
    )
}
