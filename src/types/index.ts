// src/types/index.ts
export interface Collection {
  id: string;
  name: string;
  type: 'outfit' | 'item' | 'custom';
  items?: string[]; // item IDs
  image?: string;
  count: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  color: string;
  style: string;
  image: string;
  tags: string[];
}

export interface Filter {
  id: string;
  label: string;
  type: 'category' | 'style' | 'color' | 'crop';
}