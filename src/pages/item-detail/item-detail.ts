import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderData } from '../../providers/orderdata/orderdata';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
	public title;
	public price;
	public totalprice;
	public photoURL;
	public description;
	public quantity;
	public category;
	public date;
	public orders = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderdata: OrderData) {
  	this.orderdata.getData().then((order) =>{
      if(order){
        this.orders = JSON.parse(order);  
        }
    });
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('food').title;
    this.price = this.navParams.get('food').price;
    this.photoURL = this.navParams.get('food').photoURL;
    this.description = this.navParams.get('food').description;

  }
  addOrder(){

  	let newOrder = {
  	  title: this.title,
      price: this.price,
      quantity: this.quantity,
      photoURL: this.photoURL,
      date: this.date,
      description: this.description,
      };
  	this.orders.push(newOrder);
  	this.orderdata.save(this.orders);
    this.navCtrl.setRoot('MenuPage');
    
  }
}
