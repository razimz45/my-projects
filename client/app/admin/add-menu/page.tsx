"use client";
import React, { useState } from "react";
import { createMenu } from "@/services/api"; // ✅ import API call

export default function AddMenuPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Menu name is required!");
      return;
    }

    try {
      setLoading(true);
      const newMenu = await createMenu({ name, description: desc });
      alert(`✅ Menu "${newMenu.name}" created successfully!`);

      // reset form
      setName("");
      setDesc("");
    } catch (err) {
      console.error("Error creating menu:", err);
      alert("❌ Failed to create menu. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-oswald uppercase tracking-wide text-[#C5A059] mb-6">
        Create Menu
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg border border-[#C5A059]"
      >
        {/* Menu Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Menu Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-[#C5A059] rounded text-white focus:outline-none"
            placeholder="e.g. Drinks"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-[#C5A059] rounded text-white focus:outline-none"
            placeholder="e.g. Handcrafted cocktails and beverages"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-[#C5A059] text-black font-bold rounded hover:bg-[#C5A059] disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Menu"}
        </button>
      </form>
    </div>
  );
}
