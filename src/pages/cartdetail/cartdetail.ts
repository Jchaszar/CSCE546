import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cartdetail',
  templateUrl: 'cartdetail.html',
})
export class CartdetailPage {
	title;
	price;
	quantity;
	photoURL;
	date;
	description;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('order').title;
    this.price = this.navParams.get('order').price;
    this.quantity = this.navParams.get('order').quantity;
    this.photoURL = this.navParams.get('order').photoURL;
    this.date = this.navParams.get('order').date;
    this.description = this.navParams.get('order').description;
  }
  

}

