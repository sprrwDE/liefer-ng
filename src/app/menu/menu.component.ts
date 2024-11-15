import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DatabaseService, Dish } from '../models/db';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: Dish[] = [];
  isAdded: number | null = null;

  constructor(private databaseService: DatabaseService) {
    this.menuItems = this.databaseService.getMenu();
  }

  addToBasket(arr: Dish[], i: number) {
    arr[i].amount++;
    this.isAdded = i;
    console.log(arr[i].amount);

    setTimeout(() => {
      this.isAdded = null;
    }, 2000);
  }
}
