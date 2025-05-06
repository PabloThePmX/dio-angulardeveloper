import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { games } from '../../data/games.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data = games
}
