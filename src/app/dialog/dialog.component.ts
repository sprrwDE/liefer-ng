import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DatabaseService, Dish } from '../models/db';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'dialog-content-example-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MenuComponent,
  ],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  filteredMenu: Dish[] = [];

  constructor(private databaseService: DatabaseService) {
    this.filteredMenu = this.getItemsWithAmount();
  }

  getItemsWithAmount(): Dish[] {
    return this.databaseService.getMenu().filter((dish) => dish.amount > 0);
  }

  addToBasket(arr: Dish[], i: number) {
    arr[i].amount++;
  }

  removeFromBasket(arr: Dish[], i: number) {
    if (arr[i].amount > 0) {
      arr[i].amount--;
    } else return;
  }

  checkout() {
    this.filteredMenu.forEach((menu) => {
      menu.amount = 0;
    })
    console.log(this.databaseService)
  }
}
