'use client'
import { LayoutGrid, List, Plus,MoreHorizontal, HelpCircle } from "lucide-react";
import Link from "next/link";
export default function FixedHeader({newLink}){
    return(
        <div className="flex justify-between items-center bg-white py-6 px-4">
           <button className="text-2xl">All Items</button>
           <div className="flex gap-4 ">
             {/* New */}
             <div className="pr-2">
                    <Link href={newLink} className="p-1 px-6  text-white bg-blue-600 hover:bg-blue-700 rounded-sm flex items-center space-x-2">
                        <Plus className="text-slate-50 w-4 h-4" />
                        <span>New</span>
                    </Link>
                </div>
             {/* Layout */}
             <div className="flex rounded-md overflow-hidden">
                <button className="bg-gray-300 p-2  border-r border-gray-400"><List className="w-4 h-4" /></button>
                <button className="bg-gray-100 p-2 "><LayoutGrid className="w-4 h-4" /></button>
             </div>

             {/* More */}
             <button className="bg-gray-100 p-2 rounded-md ">
               <MoreHorizontal className="w-4 h-4"/>
             </button>
             {/* Help */}
             <button className="bg-orange-600 p-2 rounded-md ">
               <HelpCircle className="w-5 h-5"/>
             </button>
           </div>
        </div>
    )
}