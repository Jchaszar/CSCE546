import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { MenuPage} from '../menu/menu';


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

	title;
	description;
	public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
  }

  saveItem(){
  	let newItem = {
  		title: this.title,
  		description: this.description,
  	};
  	this.items.push(newItem);
  	this.dataService.save(this.items);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
