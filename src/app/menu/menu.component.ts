import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DatabaseService, Dish } from '../models/db'; 

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: Dish[] = [];

  constructor(private databaseService: DatabaseService) {
    this.menuItems = this.databaseService.getMenu();
  }
}
