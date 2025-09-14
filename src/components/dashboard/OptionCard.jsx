'use client'
import Link from "next/link";


export default function OptionCard({optionData}){
    let Icon;
    const {title,icon,description, link, linkTitle,enable}=optionData;
    Icon=icon;
    return(
        <div className="shadow-md rounded p-6 bg-white flex flex-col items-center justify-center gap-4">
                    <h2 className="font-semibold text-xl">{title} </h2>
                    <div className=""> <Icon strokeWidth=".5px" className="w-36 h-36" /> </div>
                    <p className="line-clamp-1">
                        {description}
                    </p>
                    <div className="pr-2">
                  {enable?<Link href={link} className="py-2 px-3 inline-flex  text-white bg-blue-600 hover:bg-blue-700 rounded-sm justify-center items-center space-x-2">
                        {linkTitle}
                    </Link>:<button className="py-2 px-3 inline-flex  text-white bg-blue-600 hover:bg-blue-700 rounded-sm justify-center items-center space-x-2">Enable</button>}

                </div>
                </div>
    )
}
