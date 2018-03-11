import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { MenuPageModule } from '../pages/menu/menu.module';
import { AddPageModule } from '../pages/add/add.module';
import { OrderPageModule } from '../pages/order/order.module';
import { ItemDetailPageModule } from '../pages/item-detail/item-detail.module';
import { EditMenuPageModule } from '../pages/edit-menu/edit-menu.module';
import { CartdetailPageModule } from '../pages/cartdetail/cartdetail.module';

import { CartdetailPage } from '../pages/cartdetail/cartdetail';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPage  } from '../pages/add/add';
import { MenuPage } from '../pages/menu/menu';
import { OrderPage } from '../pages/order/order';
import { ItemDetailPage }  from '../pages/item-detail/item-detail';
import { EditMenuPage } from '../pages/edit-menu/edit-menu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrderData } from '../providers/orderdata/orderdata';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    SignupPage,
    TabsPage
  ],
  imports: [
    CartdetailPageModule,
    BrowserModule,
    MenuPageModule,
    OrderPageModule,
    EditMenuPageModule,
    AddPageModule,
    ItemDetailPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartdetailPage,
    AddPage,
    SigninPage,
    SignupPage,
    OrderPage,
    ItemDetailPage,
    EditMenuPage,
    MenuPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrderData,
    AuthProvider
    
  ]
})
export class AppModule {}
