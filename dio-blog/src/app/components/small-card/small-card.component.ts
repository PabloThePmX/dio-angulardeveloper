import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  photoCover: string = "";
  cardTitle: string = "";
  @Input()
  id: string | null = "0";

  ngOnInit():void{
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == Number(id))[0]

    if(result != null){
      this.cardTitle = result.title;
      this.photoCover = result.photo;
    }
  }
}
