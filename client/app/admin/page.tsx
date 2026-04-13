import React from "react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-oswald uppercase tracking-wide text-[#C5A059] mb-8">
        Admin Dashboard
      </h1>

      <div className="flex space-x-6">
        <Link
          href="/admin/add-menu"
          className="px-6 py-3 bg-[#C5A059] text-black rounded-lg font-semibold hover:bg-[#C5A059] transition"
        >
          ➕ Add Menu
        </Link>

        <Link
          href="/admin/add-item"
          className="px-6 py-3 bg-[#C5A059] text-black rounded-lg font-semibold hover:bg-[#C5A059] transition"
        >
          ➕ Add Item
        </Link>
      </div>
    </div>
  );
}
