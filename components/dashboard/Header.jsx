'use client'
import React from "react";
import { History, Plus, Users, Bell, Settings, ChevronDown, CircleUser, LayoutGrid } from "lucide-react";
import SearchInput from "./SearchInput";
export default function Header() {
    return (
        <header className="bg-gray-100  h-12 border-b border-slate-300 shadow-md flex items-center justify-between  px-8  ">
            <div className="flex gap-3">
                {/* Recent activitites */}

                <button>
                    <History className="w-6 h-6" />

                </button>

                {/* Search */}
                <SearchInput />
            </div>
            <div className="flex space-x-2 gap-3">
                {/* Plus Icon */}
                <div className="pr-2 border-r border-gray-300">
                    <button className="p-1 bg-blue-600 hover:bg-blue-700 rounded-lg">
                        <Plus className="text-slate-50 w-4 h-4" />
                    </button>
                </div>
                <div className="flex border-r border-gray-300">
                    <button className="p-1 hover:bg-slate-200  rounded-lg">
                        <Users className="text-slate-900 w-4 h-4" />
                    </button>

                </div>

                <div className="flex border-r border-gray-300">
                    <button className="p-1 hover:bg-slate-200  rounded-lg">
                        <Bell className="text-slate-900 w-4 h-4" />
                    </button>

                </div>

                <div className="flex border-r border-gray-300 ">
                    <button className="p-1 hover:bg-slate-200  rounded-lg">
                        <Settings className="text-slate-900 w-4 h-4" />
                    </button>

                </div>

                <div className="flex gap-3">
                    <button className="flex items-center "><span>Garaat</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>

                    <button>
                        <CircleUser className="w-8 h-8 border rounded-full border-slate-800"/>
                    </button>

                    <button>
                        <LayoutGrid className="w-6 h-6 text-slate-900"/>
                    </button>

                </div>
            </div>

        </header>
    )
}
