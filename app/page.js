
'use client'
import Link from "next/link";
export default function Home() {
  return (
   <div className="flex items-center flex-col justify-center min-h-screen ">
    <h2 className="text-3xl font-bold mb-3">Inventary Management Software</h2>
    <Link href="/dashboard/home/overview" className="text-blue-500">View Dashboard</Link>
   </div>
  );
}
