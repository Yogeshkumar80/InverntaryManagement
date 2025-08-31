'use client'
import React, {useState} from "react";
import { CreditCard,X } from "lucide-react";

export default function  DashboardBanner(){
    const [hidden,setHidden] = useState(false);
    return(
        <div className={`grid grid-cols-12 py-7 px-16 bg-white gap-4 relative ${hidden ? "hidden" : ""}`}>
            <div className="col-span-3">
           <CreditCard className="w-16 h-16 text-slate-500 "/>
           </div>
           <div className="col-span-6">

            <h2 className="text-2xl font-bold">Starting accepting online payments</h2>
            <p>Businesses are moving towards online payments as they're easy, secure and fast. Try them for your business today.</p>
           </div>
           <div className="col-span-3">
           <button className="py-2.5 px-4 uppercase bg-blue-700 text-white text-sm rounded-2xl">Enable</button>
           </div>

           <button className="absolute top-4 right-16" onClick={()=>setHidden(true)}>
            <X />
           </button>
         </div>
    )
}