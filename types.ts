
export interface Price {
  label?: string;
  value: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: Price[];
  imageUrl: string;
  isTop?: boolean;
  isNew?: boolean;
  extras?: { name: string; price: number }[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  items: MenuItem[];
}
