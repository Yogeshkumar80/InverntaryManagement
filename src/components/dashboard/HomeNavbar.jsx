'use client'
import React from "react";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {

    const pathname = usePathname();
    const navLinks= [
        {
            title:"Dashboard",
            href:"/dashboard/home/overview"
        },
        {
            title:"Getting Started",
            href:"/dashboard/home/getting-started"
        },
        {
            title:"Recent Updates",
            href:"/dashboard/home/updates"
        },
        {
            title:"Announcements",
            href:"/dashboard/home/anouncement"
        },
    ]
    return (
        <div className='h-32 p-5 absolute w-full border-b border-slate-300 '>
            <div className="flex space-x-3">
                <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
                    <Building2 />
                </div>
                <div className="flex flex-col">
                    <p className="text-slate-700 font-semibold ">Hello, JB Developer</p>
                    <span className="text-sm">Garat</span>
                </div>

            </div>
            <nav className="sticky mt-6 flex space-x-4">
               {
                navLinks.map((link,index)=>{
                    return(
                        <Link key={index} href={link.href} className={pathname === link.href ? " p-1  border-b-2 border-blue-600   " : " p-1  border-b-2 border-transparent   "}>{link.title}</Link>
                    )
                })
               }
            </nav>
        </div>
    )
}
