import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AddPage } from '../add/add';
import { SigninPage } from '../signin/signin';
import { Storage } from '@ionic/storage';
import { OrderData } from '../../providers/orderdata/orderdata';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

public menuitems = [];
menuRef;


  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public orderData: OrderData, private authProvider: AuthProvider) {
    var user = firebase.auth().currentUser.uid;
    this.menuRef = firebase.database().ref('Owners/' + user + '/Menu/');
  }
  logOut(){
    this.authProvider.logoutUser();
    this.app.getRootNav().setRoot(SigninPage);
      }
  clearAll(){
    this.menuitems = [];
    this.orderData.clear();
  }
  viewItem(item){
    this.navCtrl.push('ItemDetailPage', {
      food: item
    });
  }

  ionViewDidLoad() {   
    console.log('ionViewDidLoad MenuPage');
  }
  ionViewWillEnter(){
    this.menuitems = [];
    this.menuRef.on('value', (snap) => {
      snap.forEach((child) => {
        let newitem = {
          id: child.key,
          title: child.val().title,
          price: child.val().price,
          category: child.val().category,
          photoURL: child.val().photoURL,
          description: child.val().description,
        }
        this.menuitems.push(newitem);
      })
    })
  }
  goToCart(){
    this.navCtrl.push('CartPage');
  }
  editItem(slidingitem){
    this.navCtrl.push('EditMenuPage', {
      edit: slidingitem
    });
  }
  deleteItem(item){
    console.log(item.id);
    var user = firebase.auth().currentUser.uid;
    var deleteID = item.id;
    var deleteRef = firebase.database().ref('Owners/' + user + '/Menu/' + deleteID);
    deleteRef.remove();
    this.menuitems = [];
    this.menuRef.on('value', (snap) => {
      snap.forEach((child) => {
        let newitem = {
          id: child.key,
          title: child.val().title,
          price: child.val().price,
          category: child.val().category,
          photoURL: child.val().photoURL,
          description: child.val().description,
        }
        this.menuitems.push(newitem);
      })
    })
  }


}
