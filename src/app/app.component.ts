import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabaseComponent } from './database/database.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lieferclone-ng';
}
