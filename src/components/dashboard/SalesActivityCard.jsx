'use client'
import React from 'react'
import Link from 'next/link'

export default function SalesActivityCard({item}) {
    return (
        <Link href={item.href} className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-4 py-2 cursor-pointer flex items-center  gap-3 transition-all duration-300">
        <h2 className="text-slate-500 uppercase text-sm">{item.title}</h2>
        <span className="text-2xl">{item.number}</span>              
    </Link>
    )
}