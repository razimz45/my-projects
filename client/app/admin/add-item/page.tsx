"use client";
import React, { useState, useEffect } from "react";
import { getMenus, createItem } from "@/services/api"; // <-- import axios functions

export default function AddItemPage() {
  const [menus, setMenus] = useState<any[]>([]);
  const [menuId, setMenuId] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  // Fetch menus when page loads
  useEffect(() => {
    getMenus()
      .then((data) => setMenus(data))
      .catch((err) => console.error("Failed to fetch menus:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newItem = await createItem({
        menuId,
        category,
        name,
        description: desc,
        price: Number(price),
      });

      alert(`✅ Item "${newItem.name}" added successfully!`);
      setCategory("");
      setName("");
      setDesc("");
      setPrice("");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save item. Check console.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-oswald uppercase tracking-wide text-[#C5A059] mb-6">
        Add Menu Item
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg border border-[#C5A059]"
      >
        {/* Menu Dropdown */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Select Menu</label>
          <select
            value={menuId}
            onChange={(e) => setMenuId(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-[#C5A059] rounded text-white"
            required
          >
            <option value="">-- Choose Menu --</option>
            {menus.map((m) => (
              <option key={m._id} value={m._id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-[#C5A059] rounded text-white focus:outline-none"
            placeholder="e.g. Appetizers"
          />
        </div>

        {/* Item Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-[#C5A059] rounded text-white focus:outline-none"
            placeholder="e.g. Lamb Chops"
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
            placeholder="Grilled lamb chops topped with sauce"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-[#C5A059] rounded text-white focus:outline-none"
            placeholder="26"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#C5A059] text-black font-bold rounded hover:bg-[#C5A059]"
        >
          Save Item
        </button>
      </form>
    </div>
  );
}
