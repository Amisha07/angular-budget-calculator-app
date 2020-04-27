import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemCardComponent } from './item-list/item-card/item-card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BudgetCalculatorComponent, AddItemComponent, ListItemComponent, ItemCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
