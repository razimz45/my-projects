// frontend/services/api.ts
import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
});

// ------------------ MENUS ------------------

// Create a new menu
export const createMenu = async (menuData: { name: string; description?: string }) => {
  const res = await API.post("/menus", menuData);
  return res.data;
};

// Get all menus
export const getMenus = async () => {
  const res = await API.get("/menus");
  return res.data;
};

// Get a menu with its items
export const getMenuWithItems = async (id: string) => {
  const res = await API.get(`/menus/${id}`);
  return res.data;
};

// ------------------ ITEMS ------------------

// Create a new item
export const createItem = async (itemData: {
  menuId: string;
  category?: string;
  name: string;
  description?: string;
  price: number;
}) => {
  const res = await API.post("/items", itemData);
  return res.data;
};

// Get all items
export const getItems = async () => {
  const res = await API.get("/items");
  return res.data;
};

// Get items by menuId
export const getItemsByMenu = async (menuId: string) => {
  const res = await API.get(`/items/menu/${menuId}`);
  return res.data;
};
