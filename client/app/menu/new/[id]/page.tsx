"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getMenuById } from "@/services/api";
import type { MenuWithItems } from "@/types";
import { useParams } from "next/navigation";

export default function MenuDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const [data, setData] = useState<MenuWithItems | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const menu = await getMenuById(String(id));
        setData(menu);
      } catch (e: any) {
        setErr("Failed to load menu");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p>Loading…</p>;
  if (err) return <p className="text-red-600">{err}</p>;
  if (!data) return <p>Menu not found.</p>;

  return (
    <main>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{data.name}</h1>
          {data.description ? (
            <p className="text-sm text-neutral-600 mt-1">{data.description}</p>
          ) : null}
        </div>

        <Link
          href={`/menu/${data._id}/new-item`}
          className="inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
          + Add Item
        </Link>
      </div>

      <ul className="mt-4 space-y-3">
        {(!data.items || data.items.length === 0) && (
          <li className="rounded border p-4">No items in this menu yet.</li>
        )}

        {data.items?.map((it) => (
          <li key={it._id ?? it.name} className="rounded border p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{it.name}</h3>
              <span className="font-semibold">₹{Number(it.price).toFixed(2)}</span>
            </div>
            {it.description ? (
              <p className="text-sm text-neutral-600 mt-1">{it.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
