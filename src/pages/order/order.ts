import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderData } from '../../providers/orderdata/orderdata';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

	public orderitems = [];
  orderRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderdata: OrderData) {
  	var user = firebase.auth().currentUser.uid;
    this.orderRef = firebase.database().ref('Owners/' + user + '/Orders/');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  ionViewWillEnter(){
    this.orderitems = [];
    var counter = 1;
    this.orderRef.on('value', (snap) => {
      snap.forEach((child) => {
        let newitem = {
          id: child.key,
          number: counter,
          date: child.val().date,
          pricesum: child.val().pricesum,
          address: child.val().address,
        }
        //console.log(newitem);
        counter++;
        this.orderitems.push(newitem);
      })
    })
  }
  viewOrder(item){
    //console.log(item);
    this.navCtrl.push('OrderDetailPage', {
      order: item
    });
  }
	
}
