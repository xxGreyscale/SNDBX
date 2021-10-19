import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() package: any
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      console.log(changes);
      console.log(this.package)
      
    }
  }
  ngOnInit(): void {
  }

}
