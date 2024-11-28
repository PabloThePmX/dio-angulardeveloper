import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = "https://cdn.mos.cms.futurecdn.net/pu6BQy3xTTA4b49QjYQBV.jpg";
  contentTitle:string = "";
  contentDescription:string = "";
  private id:string | null = "0";

  constructor(private route:ActivatedRoute){ }

  ngOnInit():void{
    this.route.paramMap.subscribe(x => this.id = x.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == Number(id))[0]

    if(result != null){
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
    }
  }
}
