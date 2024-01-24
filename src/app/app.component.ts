import { Component, OnInit } from '@angular/core';
import { card } from './Class/Card';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataser:DataServiceService){

  }
  data_offline:card[]=[];

  ngOnInit(): void {
  this.dataser.GetData().subscribe((data:any)=>{
    console.log(data);
    
    data.forEach((element:any) => {
      console.log(element);
      this.data_offline.push(new card(element.id,element.name,element.species,element.image))
    });
    
    
    
  });
  }



}
