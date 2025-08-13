
'use client'
import React from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
export default function Layout({ children }) {
    return (
        <div className="flex ">
            <Sidebar />
            <main className="bg-slate-100 w-full min-h-screen">
                <Header />
                {children}</main>


        </div>
    )

}