// src/data/mockData.ts
import { Collection, Item, Filter } from '../types';

export const mockCollections: Collection[] = [
  {
    id: '1',
    name: 'Outfits',
    type: 'outfit',
    count: 12,
    image: 'https://picsum.photos/300/400?random=1'
  },
  {
    id: '2',
    name: 'Items',
    type: 'item',
    count: 45,
    image: 'https://picsum.photos/300/400?random=2'
  },
  {
    id: '3',
    name: 'Work',
    type: 'custom',
    count: 8,
    image: 'https://picsum.photos/300/400?random=3'
  },
  {
    id: '4',
    name: 'Leisure',
    type: 'custom',
    count: 15,
    image: 'https://picsum.photos/300/400?random=4'
  },
];

export const mockItems: Item[] = [
  {
    id: '1',
    name: 'Knot Detail KnitTtop',
    description: 'Comfortable knit top with knot detail',
    category: 'Tops',
    subcategory: 'Knitwear',
    color: 'Beige',
    style: 'Casual',
    image: 'https://picsum.photos/300/400?random=10',
    tags: ['Crop', 'Knot Detail']
  },
  {
    id: '2',
    name: 'Motif Printed Blouse',
    description: 'Elegant printed blouse',
    category: 'Tops',
    subcategory: 'Blouses',
    color: 'White',
    style: 'Formal',
    image: 'https://picsum.photos/300/400?random=11',
    tags: ['Crop', 'Printed']
  },
  // Add more items based on your screenshots
];

export const mockFilters: Filter[] = [
  { id: 'cat1', label: 'Style', type: 'category' },
  { id: 'cat2', label: 'Mood', type: 'category' },
  { id: 'cat3', label: 'Color', type: 'category' },
  { id: 'crop1', label: 'Crop', type: 'crop' },
  { id: 'crop2', label: 'Crop', type: 'crop' },
];