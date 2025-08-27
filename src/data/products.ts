import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Aceite de Oliva Extra Virgen Premium',
    description: 'Aceite de oliva extra virgen de primera extracción en frío, con sabor intenso y aroma frutado.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
    category: 'Oliva',
    origin: 'España',
    volume: '500ml',
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Aceite de Coco Orgánico',
    description: 'Aceite de coco virgen orgánico, perfecto para cocinar y cuidado personal.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
    category: 'Coco',
    origin: 'Filipinas',
    volume: '400ml',
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Aceite de Aguacate Premium',
    description: 'Aceite de aguacate prensado en frío, rico en grasas saludables y vitamina E.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
    category: 'Aguacate',
    origin: 'México',
    volume: '500ml',
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '4',
    name: 'Aceite de Girasol Alto Oleico',
    description: 'Aceite de girasol alto oleico, ideal para frituras y cocción a altas temperaturas.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    category: 'Girasol',
    origin: 'Argentina',
    volume: '1L',
    inStock: true,
    rating: 4.3,
    reviews: 73
  },
  {
    id: '5',
    name: 'Aceite de Sésamo Tostado',
    description: 'Aceite de sésamo tostado con sabor intenso, perfecto para la cocina asiática.',
    price: 15.75,
    image: 'https://images.unsplash.com/photo-1599909533730-b3b5b6b8b0b8?w=400&h=400&fit=crop',
    category: 'Sésamo',
    origin: 'China',
    volume: '250ml',
    inStock: false,
    rating: 4.7,
    reviews: 94
  },
  {
    id: '6',
    name: 'Aceite de Trufa Blanca',
    description: 'Aceite de oliva infusionado con trufa blanca, un lujo gastronómico único.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    category: 'Gourmet',
    origin: 'Italia',
    volume: '100ml',
    inStock: true,
    rating: 5.0,
    reviews: 23
  }
];

export const categories = ['Todos', 'Oliva', 'Coco', 'Aguacate', 'Girasol', 'Sésamo', 'Gourmet'];