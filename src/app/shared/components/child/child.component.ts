import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData: any;

  constructor() { 
    console.log('constructor from child');
  }

  ngOnInit(): void {
    console.log('ngOnInit from child');
  }

  changeFromChild(){
    this.parentData -= 10;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
