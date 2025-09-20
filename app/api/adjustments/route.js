import { NextResponse } from "next/server";
export async function POST(request){
  try{
    const {transferStockQty, receiveBranchId, notes} = await request.json();

    const adjustment={
        transferStockQty,
        receiveBranchId,
        notes
    }
    console.log(adjustment)
    return NextResponse.json(adjustment)
  }
  catch(error){
    console.log(error)
   return NextResponse.json(
    {
        error,
        message:"Failed to create a adjustment"
    },
    {
        status:500
    }
   )
}
}
