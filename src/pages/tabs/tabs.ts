import { Component } from '@angular/core';

import { AddPage  } from '../add/add';
import { MenuPage } from '../menu/menu';
import { OrderPage } from '../order/order';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = OrderPage;
  tab2Root = MenuPage;
  tab3Root = AddPage;

  constructor() {

  }
}
