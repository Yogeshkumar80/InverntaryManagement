import React from "react";
import DashboardBanner from "../../../../../src/components/dashboard/DashboardBanner"
import SalesOverview from "../../../../../src/components/dashboard/SalesOverview"
export default function Dashboard(){
    return(
        <div className="">
            <DashboardBanner/>
            <SalesOverview/>
            {/* <h2>Dashboard</h2> */}
        </div>
    )
}
