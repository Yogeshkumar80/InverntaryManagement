'use client'
import Link from "next/link"
import { X } from "lucide-react"
export default function FormHeader({title, href}){
    return(
        <div className="flex items-center justify-between bg-white py-3 px-16">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link href={href} className="flex items-center space-x-2">
           <X/>
        </Link>
    </div>
    )
}
