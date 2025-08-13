'use client'
import { BaggageClaim, ChevronLeft, Home, ShoppingCart, ShoppingBasket, ShoppingBag, Cable, BarChart, Files } from "lucide-react";
import React from "react";
import Link from "next/link";


export default function Sidebar() {
    return (
        <div className="w-56 min-h-screen  text-slate-50 bg-slate-800 flex flex-col justify-between">
            {/* Top Part */}
            <div className="flex flex-col">
                {/* Logo */}
                <Link  href="#" className="flex bg-slate-950 space-x-2 items-center px-2 py-4">
                    <ShoppingCart />
                    <span className="font-semibold text-xl">Inventory</span>
                </Link>

                {/* Links */}

                <nav  className="flex flex-col  gap-3 px-3 py-6">
                    <Link className="flex items-center  bg-blue-600 text-slate-50  p-2 rounded-md space-x-2" href="#"><Home className="w-4 h-4"/> <span>Home</span></Link>
                    <button className="p-2 flex items-center space-x-2" ><BaggageClaim className="w-4 h-4"/> <span>Inventory</span></button>
                    <button className="p-2 flex items-center space-x-2" ><ShoppingBasket className="w-4 h-4"/> <span>Sales</span></button>

                    <button className="p-2 flex items-center space-x-2" ><ShoppingBag className="w-4 h-4"/> <span>Purchases</span></button>
                    <Link className="p-2 flex items-center space-x-2" href=""><Cable className="w-4 h-4"/> <span>Integration</span></Link>


                    <Link className="p-2 flex items-center space-x-2" href=""><BarChart className="w-4 h-4"/> <span>Reports</span></Link>
                    <Link className="p-2 flex items-center space-x-2" href=""><Files className="w-4 h-4"/> <span>Document</span></Link>



                </nav>
            </div>

            <div className="flex flex-col justify-end ">
                <div className="flex justify-center bg-slate-950 space-x-2 items-center px-2 py-4">
                    <ChevronLeft />
                </div>
            </div>
            {/* Bottom Part */}
            {/* Subscription Card */}
            {/* Footer Icon */}

        </div>

    )
}
