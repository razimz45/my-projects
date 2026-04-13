"use client";

import { useState } from "react";
import { addItem } from "@/services/api";
import { useParams, useRouter } from "next/navigation";

export default function NewItemPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const menuId = String(params.id);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    const priceNum = Number(price);
    if (!name.trim()) return setErr("Item name is required.");
    if (!price || Number.isNaN(priceNum) || priceNum <= 0)
      return setErr("Price must be a number greater than 0.");

    try {
      setSaving(true);
      await addItem(menuId, {
        name: name.trim(),
        description: description.trim(),
        price: priceNum,
      });
      router.push(`/menu/${menuId}`);
    } catch (e: any) {
      setErr("Failed to create item");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Add Item</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-3">
        <div>
          <label className="block text-sm mb-1">Item Name *</label>
          <input
            className="w-full rounded border px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Lycheetini"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            className="w-full rounded border px-3 py-2"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Price (₹) *</label>
          <input
            className="w-full rounded border px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            inputMode="decimal"
            placeholder="e.g., 199"
          />
        </div>

        {err && <p className="text-red-600 text-sm">{err}</p>}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => history.back()}
            className="rounded border px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
