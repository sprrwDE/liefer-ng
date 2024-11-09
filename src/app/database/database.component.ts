import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

// Interface gibt Struktur vor
interface Dish {
  name: string;
  description: string;
  price: number;
  image: string;
  amount: number;
}

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './database.component.html',
  styleUrl: './database.component.scss',
})
export class DatabaseComponent {
  // Erstellt Array 
  lieferandoMenu: Dish[] = [
    {
      name: 'Margherita Pizza',
      description:
        'Classic pizza with tomato sauce, mozzarella, and fresh basil.',
      price: 8.99,
      image: '/assets/bowl-1842294_1280.jpg',
      amount: 1,
    },
    {
      name: 'Pasta Carbonara',
      description:
        'Traditional Italian pasta with creamy sauce, bacon, and Parmesan cheese.',
      price: 10.49,
      image: '/assets/bowl-1842294_1280.jpg',
      amount: 1,
    },
    {
      name: 'Caesar Salad',
      description:
        'Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
      price: 7.99,
      image: '/assets/bowl-1842294_1280.jpg',
      amount: 1,
    },
    {
      name: 'Chicken Burger',
      description:
        'Grilled chicken breast with lettuce, tomato, and house-made aioli on a toasted bun.',
      price: 9.99,
      image: '/assets/bowl-1842294_1280.jpg',
      amount: 1,
    },
  ];
}
