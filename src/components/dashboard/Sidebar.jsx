'use client'
import { BaggageClaim, ChevronLeft, Home, ShoppingCart, ShoppingBasket, ShoppingBag, Cable, BarChart, Files, PlusCircle } from "lucide-react";
import React from "react";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";
import SideBarDropdownLink from "./SideBarDropdownLink";



export default function Sidebar() {
    const inventoryLinks=[
        {
            title:"Item",
            href:"/dashboard/inventory"
        },
        {
            title:"Categories",
            href:"/dashboard/inventory"
        },
        {
            title:"Units",
            href:"/dashboard/inventory"
        },
        {
            title:"Brands",
            href:"/dashboard/inventory"
        },
        {
            title:"Warehouse",
            href:"/dashboard/inventory"
        },
        {
            title:"Inventory Adjustments",
            href:"/dashboard/inventory"
        },
        {
            title:"Suppliers",
            href:"/dashboard/inventory"
        },
    ]

    const salesLinks=[
        {
            title:"Customers",
            href:"/dashboard/sales/customers"
        },
        {
            title:"Orders",
            href:"/dashboard/sales/orders"
        },
        {
            title:"Packages",
            href:"/dashboard/sales/packages"
        },
        {
            title:"Shipments",
            href:"/dashboard/sales/shipments"
        },
        {
            title:"Invoices",
            href:"/dashboard/sales/invoices"
        },
        {
            title:"Sales Receipts",
            href:"/dashboard/sales/sales-receipts"
        },
        {
            title:"Payment Received",
            href:"/dashboard/sales/payment-received"
        },
        {
            title:"Sales Returns",
            href:"/dashboard/sales/sales-returns"
        },
        {
            title:"Credit Notes",
            href:"/dashboard/sales/credit-notes"
        },
    ]
    return (
        <div className="w-60 min-h-screen  text-slate-50 bg-slate-800 flex flex-col justify-between fixed">
            {/* Top Part */}
            <div className="flex flex-col">
                {/* Logo */}
                <Link href="#" className="flex bg-slate-950 space-x-2 items-center px-2 py-4">
                    <ShoppingCart />
                    <span className="font-semibold text-xl">Inventory</span>
                </Link>


                <nav className="flex flex-col  gap-3 px-3 py-6">
                    <Link className="flex items-center  bg-blue-600 text-slate-50  p-2 rounded-md space-x-2" href="/dashboard/home/overview"><Home className="w-4 h-4" /> <span>Home</span></Link>
                     <SideBarDropdownLink title="Inventory" items={inventoryLinks} icon={BaggageClaim}/>
                     <SideBarDropdownLink title="Sales" items={salesLinks} icon={ShoppingBasket}/>

                    <button className="p-2 flex items-center space-x-2" ><ShoppingBag className="w-4 h-4" /> <span>Purchases</span></button>
                    <Link className="p-2 flex items-center space-x-2" href="/dashboard/integration"><Cable className="w-4 h-4" /> <span>Integration</span></Link>


                    <Link className="p-2 flex items-center space-x-2" href=""><BarChart className="w-4 h-4" /> <span>Reports</span></Link>
                    <Link className="p-2 flex items-center space-x-2" href=""><Files className="w-4 h-4" /> <span>Document</span></Link>



                </nav>
            </div>

            <div className="flex flex-col justify-end ">
                <SubscriptionCard />

                <button className="flex justify-center bg-slate-950 space-x-2 items-center px-2 py-4">
                    <ChevronLeft />
                </button>
            </div>
            {/* Bottom Part */}
            {/* Subscription Card */}
            {/* Footer Icon */}

        </div>

    )
}
