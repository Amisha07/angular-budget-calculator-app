import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../shared/model/item.model';


@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() Items: Item[];
  @Output() delete: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  ondelete(item: Item) {
    this.delete.emit(item);
  }

}