export interface Menu {
  _id: string;
  name: string;
  description?: string;
}

export interface MenuCreate {
  name: string;
  description?: string;
}

export interface MenuItem {
  _id: string;
  name: string;
  description?: string;
  price: number;
}

export interface MenuItemCreate {
  name: string;
  description?: string;
  price: number;
}

export interface MenuWithItems extends Menu {
  items: MenuItem[];
}
