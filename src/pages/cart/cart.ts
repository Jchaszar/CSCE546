import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderData } from '../../providers/orderdata/orderdata';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

	public orderitems = [];
	orderRef;
	itemRef;
	address;
	date;
	pricesum;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderdata: OrderData) {
  	this.orderdata.getData().then((order) =>{
      if(order){
        this.orderitems = JSON.parse(order);  
        }
    });
    var user = firebase.auth().currentUser.uid;
    this.orderRef = firebase.database().ref('Owners/' + user + '/Orders/');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  ionViewWillEnter(){
    this.orderdata.getData().then((order) =>{
      if(order){
        this.orderitems = JSON.parse(order);      }
    });
  }
  submitOrder(){
  	this.pricesum = 0;
  	var newRef = this.orderRef.push({
  			address: this.address,
  			date: this.date,
  			pricesum: 0,
  		});
  	var newID = newRef.key;
  	var user = firebase.auth().currentUser.uid;
  	this.itemRef = firebase.database().ref('Owners/' + user + '/Orders/' + newID);
  	this.orderitems.forEach((snap) => {
  		this.pricesum += (snap.price*snap.quantity);
  		this.itemRef.push({
  			title: snap.title,
  			price: snap.price,
  			quantity: snap.quantity,
  			photoURL: snap.photoURL,
  			description: snap.description,
  	})
  		this.itemRef.update({
  			"pricesum": this.pricesum
  		})
  	})
  	this.orderitems = [];
  	this.orderdata.clear();
  	this.navCtrl.pop();
  }

  viewOrder(item){
    this.navCtrl.push('CartdetailPage', {
      order: item
    });
  }
	
}
