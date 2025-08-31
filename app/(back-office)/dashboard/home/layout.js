
'use client'
import React from "react";
import {HomeNavbar} from "../../../../src/components/dashboard"
export default function Layout({ children }) {
    return (
        <div className="flex w-full">
            <HomeNavbar />
            <div className="relative mt-32 p-2">
            {children}
            </div>
        </div>
    )

}