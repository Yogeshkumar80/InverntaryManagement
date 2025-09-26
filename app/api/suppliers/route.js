import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request){
  try{
    const {name,phone,email,address,contactPerson,supplierCode,taxID,paymentTerms,notes} = await request.json();

    const supplier=await db.supplier.create({
      data:{
        name:name,
        phone:phone,
        email:email,
        address:address,
        contactPerson:contactPerson,
        supplierCode:supplierCode,
        taxID:taxID,
        paymentTerms:paymentTerms,
        notes:notes
      }
    })
    console.log(supplier)
    return NextResponse.json(supplier)
  }
  catch(error){
    console.log(error)
   return NextResponse.json(
    {
        error,
        message:"Failed to create a supplier"
    },
    {
        status:500
    }
   )
}
}
