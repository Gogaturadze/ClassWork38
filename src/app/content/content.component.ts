import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
