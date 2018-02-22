import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { MenuPage} from '../menu/menu';
import { Storage } from '@ionic/storage';


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
	public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
    this.dataService.getData().then((food) =>{
      if(food){
        this.items = JSON.parse(food);      }
    });
  }

  saveItem(){
  	let newItem = {
  		title: this.title,
      price: this.price,
      category: this.category,
      photoURL: this.photoURL,
  		description: this.description,
  	};
  	this.items.push(newItem);
  	this.dataService.save(this.items);
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
