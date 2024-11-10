import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatabaseComponent,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    DialogComponent 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lieferclone-ng';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
