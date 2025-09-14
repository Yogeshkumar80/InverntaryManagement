'use client'
import React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronRight } from 'lucide-react'
import CollapsableLink from './CollapsableLink'
import { PlusCircle } from 'lucide-react'
const SideBarDropdownLink = ({title, items, icon}) => {
    const Icon= icon;
    return (
        <Collapsible>
        <CollapsibleTrigger className="flex justify-between items-center w-full"><div className="p-2 flex items-center space-x-2"><Icon className="w-4 h-4" /> <span>{title}</span></div> <ChevronRight className="w-4 h-4 ho" /></CollapsibleTrigger>
        <CollapsibleContent>
         {items.map((item,index)=>(
            <CollapsableLink key={index} title={item.title} href={item.href}/>
         ))}
        </CollapsibleContent>
    </Collapsible>
    )
}

export default SideBarDropdownLink