
'use client'
import React from "react";
import Header from "../../src/components/dashboard/Header";
import Sidebar from "../../src/components/dashboard/Sidebar";
export default function Layout({ children }) {
    return (
        <div className="flex ">
            <Sidebar />
            <main className="ml-60 bg-slate-100 w-full min-h-screen">
                <Header />
                {children}</main>


        </div>
    )

}