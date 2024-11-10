import { Injectable } from '@angular/core';

export interface Dish {
  name: string;
  description: string;
  price: number;
  image: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  lieferandoMenu: Dish[] = [
    {
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil.',
      price: 8.99,
      image: '/assets/bowl-1842294_1280.jpg',
      amount: 1,
    },
    {
      name: 'Pasta Carbonara',
      description: 'Traditional Italian pasta with creamy sauce, bacon, and Parmesan cheese.',
      price: 10.49,
      image: '/assets/bowl-1842294_1280.jpg',
      amount: 1,
    },
    {
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
      price: 7.99,
      image: '/assets/bowl-1842294_1280.jpg',
      amount: 1,
    },
    {
      name: 'Chicken Burger',
      description: 'Grilled chicken breast with lettuce, tomato, and house-made aioli on a toasted bun.',
      price: 9.99,
      image: '/assets/bowl-1842294_1280.jpg',
      amount: 1,
    },
  ];

  constructor() {}

  getMenu(): Dish[] {
    return this.lieferandoMenu;
  }
}
