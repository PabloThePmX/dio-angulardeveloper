import { Component, input, InputSignal } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from "./card-pricing/card-pricing.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  gameCover: InputSignal<string> = input("");
  gameLabel = input("");
  gameType: InputSignal<string> = input("");
  gamePrice: InputSignal<string> = input("");
}
