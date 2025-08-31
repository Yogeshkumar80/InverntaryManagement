'use client'
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
export default function InventorySummaryCard({item}) {
    return (
        <Link href={item.href} className="rounded-lg cursor-pointer flex items-center justify-center flex-col gap-3 transition-all duration-300 border border-slate-400 hover:border-blue-400 bg-white p-8"> 
                            <h4 className={`font-semibold text-3xl ${item.color}`}>{item.number}</h4>
                            <small className={`text-slate-500 `}>{item.unit}</small>
                             <div className="flex items-center space-x-2 text-slate-500 ">
                        <CheckCircle2 className="w-4 h-4"/>
                        <span className="uppercase text-xs">{item.title}</span>


                     </div>
                </Link>
    )
}