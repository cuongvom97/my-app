import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
  constructor( id:number,name:string){
    this.id=id;
    this.name=name
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
}
