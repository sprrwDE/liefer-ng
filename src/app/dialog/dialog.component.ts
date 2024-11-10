import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DatabaseService, Dish } from '../models/db';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dialog-content-example-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  filteredMenu: Dish[] = [];

  constructor(private databaseService: DatabaseService) {
    this.filteredMenu = this.getItemsWithAmount();
  }

  getItemsWithAmount(): Dish[] {
    return this.databaseService.getMenu().filter(dish => dish.amount > 0);
  }
}