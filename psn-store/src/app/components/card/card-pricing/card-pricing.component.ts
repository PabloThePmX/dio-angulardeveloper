import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {
  gameType: InputSignal<string> = input("");
  gamePrice: InputSignal<string> = input("");
}
