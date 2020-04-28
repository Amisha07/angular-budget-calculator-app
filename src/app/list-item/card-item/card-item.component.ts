import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() isIncome: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}