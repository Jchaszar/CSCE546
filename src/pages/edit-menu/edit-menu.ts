import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-edit-menu',
  templateUrl: 'edit-menu.html',
})
export class EditMenuPage {
	title;
	description;
	category;
  photoURL;
  price;
  menuRef;
  itemID;
	

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    this.title = this.navParams.get('edit').title;
    this.price = this.navParams.get('edit').price;
    this.photoURL = this.navParams.get('edit').photoURL;
    this.description = this.navParams.get('edit').description;
    this.itemID = this.navParams.get('edit').id;
    console.log(this.itemID);
    var user = firebase.auth().currentUser.uid;
    this.menuRef = firebase.database().ref('Owners/' + user + '/Menu/' + this.itemID);
  }

  editItem(){
    let newItem = {
      title: this.title,
      price: this.price,
      category: this.category,
      photoURL: this.photoURL,
      description: this.description,
    };
    if (this.category == null){
      alert("Set entries for all inputs");
    }
    else{
    this.menuRef.update({
       "title": newItem.title,
       "price": newItem.price,
       "category": newItem.category,
       "photoURL": newItem.photoURL,
       "description": newItem.description,
    })
    this.navCtrl.setRoot('MenuPage');
  }
  }

}
