import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { AddPage } from '../add/add';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
	public menuitems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
  	this.dataService.getData().then((food) =>{
  		if(food){
  			this.menuitems = food;
  		}
  	});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
