import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/models/item.model'

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: Item) {

  }
}