"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { Kelly_Slab } from "next/font/google";
import { getMenus, getMenuWithItems } from "@/services/api"; // ✅ add getMenus

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const kellySlab = Kelly_Slab({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kelly-slab",
});

type Menu = { _id: string; name: string; description?: string };
type MenuItem = {
  _id?: string;
  name: string;
  description: string;
  price: number;
};

export default function HomePage() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [menuIdByName, setMenuIdByName] = useState<Record<string, string>>({});
  const [activeCategory, setActiveCategory] = useState(""); // still a NAME like "Food"
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false); // start false to avoid spinner before selection

  // load menus once and build name->id map (case-insensitive)
  useEffect(() => {
    async function bootstrap() {
      try {
        const list = await getMenus();
        setMenus(list);
        const map: Record<string, string> = {};
        list.forEach((m: Menu) => {
          map[m.name.toLowerCase()] = m._id;
        });
        setMenuIdByName(map);

        // default tab: prefer "Food" if present, else first menu name, else keep empty
        if (!activeCategory) {
          if (map["food"]) setActiveCategory("Food");
          else if (list[0]?.name) setActiveCategory(list[0].name);
        }
      } catch (e) {
        console.error("Failed to load menus", e);
      }
    }
    bootstrap();
  }, []);

  // fetch items whenever activeCategory (name) changes
  useEffect(() => {
    if (!activeCategory) return;
    const id = menuIdByName[activeCategory.toLowerCase()];
    if (!id) {
      // menu with this name not found in DB — clear items gracefully
      setItems([]);
      return;
    }

    async function fetchItems() {
      setLoading(true);
      try {
        const data = await getMenuWithItems(id); // ✅ use id mapped from name
        setItems(data.items || []);
      } catch (err) {
        console.error("Error loading items:", err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, [activeCategory, menuIdByName]);

  return (
    <div className="w-full">
      {/* Hero Section with Overlay (UNCHANGED) */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-[center_10%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2
            className={`text-[70px] ${oswald.className} font-bold tracking-[0.03em] uppercase [text-shadow:5px_1px_0_#800020]`}
          >
            Menu
          </h2>
          <p
            className={`mt-2 ${kellySlab.className} font-light text-[18px] max-w-[618px]`}
          >
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </section>
      <div className="relative h-[79px] w-full">
        <Image
          src="/main.png"
          alt="Category Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-20 text-white flex justify-center gap-8 py-4">
          {menus.map(
            (menu) => (
              console.log(
                "activeCategory:",
                activeCategory,
                "menu.name:",
                menu.name,
                "match:",
                activeCategory === menu.name
              ),
              (
                <button
                  key={menu._id}
                  onClick={() => setActiveCategory(menu.name)}
                  className={`uppercase ${
                    oswald.className
                  } tracking-[0.03em]px-8 py-2 px-8 border font-medium border-yellow-400 ${
                    activeCategory === menu.name
                      ? "bg-[#C5A059]"
                      : "bg-black hover:border-b-2 hover:border-gray-400 [text-shadow:1.3px_0.97px_0_#800020]"
                  }`}
                >
                  {menu.name}
                </button>
              )
            )
          )}
        </div>
      </div>

      <section className="relative w-full py-16 overflow-hidden min-h-[1000px] md:min-h-[1200px]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/menubg.png"
            alt="Main Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/95">
            {/* Side Decorations */}
            <Image
              src="/decor-left.png"
              alt="Left Decoration"
              width={200}
              height={400}
              className="absolute left-0 top-0 hidden md:block h-full w-auto object-contain"
            />
            <Image
              src="/decor-right.png"
              alt="Right Decoration"
              width={200}
              height={400}
              className="absolute right-0 top-0 hidden md:block h-full w-auto object-contain"
            />
          </div>
        </div> 

        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-[#C5A059] p-16 relative">
            <div className="flex items-center justify-center mb-10">
              {/* Left line */}
              <div className="w-24 border-t border-[#C5A059]"></div>

              {/* Heading */}
              <h3 className="mx-6 text-[40px] font-oswald font-semibold uppercase tracking-[0.03em] text-center text-white [text-shadow:5px_1px_0_#800020]">
                {activeCategory}
              </h3>

              {/* Right line */}
              <div className="w-24 border-t border-[#C5A059]"></div>
            </div>

            {loading ? (
              <p className="text-center text-white">Loading...</p>
            ) : items.length === 0 ? (
              <p className="text-center text-white">No items found.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {/* Food decoration images */}
                <Image
                  src="/food-left.png"
                  alt="Food Decoration Left"
                  width={100}
                  height={100}
                  className="absolute -top-10 -left-10 md:block md:w-[180px] md:h-[180px]"
                />

                <Image
                  src="/food-right.png"
                  alt="Food Decoration Right"
                  width={100}
                  height={100}
                  className="absolute -top-10 -right-10 md:block md:w-[180px] md:h-[180px]"
                />

                <Image
                  src="/food-bottom.png"
                  alt="Food Decoration bottom"
                  width={100}
                  height={100}
                  className="absolute -bottom-16 -left-10 md:block md:w-[160px] md:h-[160px]"
                />
                {items.map((item) => (
                  <div key={item._id || item.name} className="text-white ">
                    <div className="flex justify-between items-center">
                      <p
                        className={`text-[22px] ${oswald.className} uppercase tracking-[0.03em] whitespace-nowrap`}
                      >
                        {item.name}
                      </p>
                      <div className="flex-1 border-b border-dotted border-gray-500 mx-2"></div>
                      <span className="font-oswald text-[22px] font-semibold tracking-[0.03em]">
                        ${item.price}
                      </span>
                    </div>
                    <p
                      className={`text-gray-300 ${kellySlab.className} text-sm mt-1`}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
