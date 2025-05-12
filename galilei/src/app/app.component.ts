import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'galilei';
}
