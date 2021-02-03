import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, DoCheck, OnDestroy {
  
  data = 10;

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    console.log(this.data);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  addNumber(): void {
    this.data += 10;
  }
  deleteNumber(): void {
    this.data -= 10;
  }

}
