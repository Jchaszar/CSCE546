import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderData } from '../../providers/orderdata/orderdata';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

	public orderitems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderdata: OrderData) {
  	this.orderdata.getData().then((order) =>{
      if(order){
        this.orderitems = JSON.parse(order);  
        }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  ionViewWillEnter(){
    this.orderdata.getData().then((order) =>{
      if(order){
        this.orderitems = JSON.parse(order);      }
    });
  }
  viewOrder(item){
    this.navCtrl.push('OrderDetailPage', {
      order: item
    });
  }
	
}
