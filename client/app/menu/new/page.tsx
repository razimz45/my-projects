"use client";

import { useState } from "react";
import { createMenu } from "@/services/api";
import { useRouter } from "next/navigation";

export default function NewMenuPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    if (!name.trim()) {
      setErr("Menu name is required.");
      return;
    }

    try {
      setSaving(true);
      const created = await createMenu({ name: name.trim(), description: description.trim() });
      // If your backend returns the created menu object with _id:
      if (created && created._id) {
        router.push(`/menu/${created._id}`);
      } else {
        router.push("/");
      }
    } catch (e: any) {
      setErr("Failed to create menu");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Create Menu</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-3">
        <div>
          <label className="block text-sm mb-1">Menu Name *</label>
          <input
            className="w-full rounded border px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Drinks"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            className="w-full rounded border px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description"
            rows={3}
          />
        </div>

        {err && <p className="text-red-600 text-sm">{err}</p>}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-60"
          >
            {saving ? "Creating…" : "Create"}
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
