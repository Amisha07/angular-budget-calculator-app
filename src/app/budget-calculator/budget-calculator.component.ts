import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/model/item.model';
@Component({
  selector: 'budget-calculator',
  templateUrl: './budget-calculator.component.html',
  styleUrls: ['./budget-calculator.component.scss']
})
export class BudgetCalculatorComponent implements OnInit {

  Items: Item[] = new Array<Item>();
  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: Item){
    this.Items.push(newItem);
  }

  deleteItem(item: Item) {
    let index= this.Items.indexOf(item);
    this.Items.splice(index, 1);
  }
}