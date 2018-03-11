import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage} from '../menu/menu';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

	public title;
  public price;
  public category;
  public photoURL;
	public description;
  menuRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var user = firebase.auth().currentUser.uid;
    this.menuRef = firebase.database().ref('Owners/' + user + '/Menu/');
  }

  saveItem(){
  	let newItem = {
  		title: this.title,
      price: this.price,
      category: this.category,
      photoURL: this.photoURL,
  		description: this.description,
  	};
  	this.menuRef.push({
       title: newItem.title,
       price: newItem.price,
       category: newItem.category,
       photoURL: newItem.photoURL,
       description: newItem.description,
    })
    this.navCtrl.setRoot('MenuPage');
  }
  viewItem(item){
    this.navCtrl.push('ItemDetailPage', {
      food: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }


}
