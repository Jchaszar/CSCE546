import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { MenuPageModule } from '../pages/menu/menu.module';
import { AddPageModule } from '../pages/add/add.module';
import { OrderPageModule } from '../pages/order/order.module';
import { ItemDetailPageModule } from '../pages/item-detail/item-detail.module';

import { TabsPage } from '../pages/tabs/tabs';
import { AddPage  } from '../pages/add/add';
import { MenuPage } from '../pages/menu/menu';
import { OrderPage } from '../pages/order/order';
import { ItemDetailPage }  from '../pages/item-detail/item-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data/data';
import { OrderData } from '../providers/orderdata/orderdata';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    MenuPageModule,
    OrderPageModule,
    AddPageModule,
    ItemDetailPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPage,
    OrderPage,
    ItemDetailPage,
    MenuPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    OrderData
  ]
})
export class AppModule {}
