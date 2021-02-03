import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { PublicationsService } from 'src/app/shared/services/publications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnChanges {

  publications:Object[];
  dni:string = '';
  @Input() prop!: number;

  constructor(private service: PublicationsService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log(this.service.getPublications());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.prop);
  }

  checkDni(){
    if(this.dni.length > 0) return true;
    else return false;
  }
/*
  ngDoCheck() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.dni); 
  }
*/
}
