"use client";
import Link from "next/link";



export default function Butts() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <Link href="/Bage1">
        <button className="rounded-full bg-blue-500 p-4">Save Changes</button>
      </Link>
      <button className="rounded-full bg-green-500 p-4">Save Changes</button>
      <button className="rounded-full bg-pink-500 p-4">Save Changes</button>
      <button className="rounded-full bg-teal-500 p-4">Save Changes</button>
    </div>
  );
}
