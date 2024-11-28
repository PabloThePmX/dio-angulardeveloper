import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent {
  photoCover: string = "";
  cardTitle: string = "";
  cardDescription: string = "";
  @Input()
  id:string | null = "0"; 

  ngOnInit():void{
    // this.route.paramMap.subscribe(x => this.id = x.get("id"));
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(x => x.id == Number(id))[0]

    if (result != null){
      this.cardTitle = result.title;
      this.cardDescription = result.description;
      this.photoCover = result.photo;
    }
  }

}
