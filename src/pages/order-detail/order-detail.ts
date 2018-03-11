import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
	date;
  pricesum;
  keyID;
  address;
  orderitems = [];
  orderRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.date = this.navParams.get('order').date;
    this.pricesum = this.navParams.get('order').pricesum;
    this.keyID = this.navParams.get('order').id;
    this.address = this.navParams.get('order').address;
        var user = firebase.auth().currentUser.uid;
    this.orderRef = firebase.database().ref('Owners/' + user + '/Orders/' + this.keyID);
  }
    ionViewWillEnter(){
    this.orderitems = [];
    this.orderRef.on('value', (snap) => {
      snap.forEach((child) => {
      if(child.val().title == null){
        console.log('.');
      }
      else{
        let newitem = {
          title: child.val().title,
          price: child.val().price,
          quantity: child.val().quantity,
          photoURL: child.val().photoURL,
          description: child.val().description,
        }
        this.orderitems.push(newitem);
}
        })
        })

  }
  

}
