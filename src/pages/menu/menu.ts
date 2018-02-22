import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { AddPage } from '../add/add';
import { Storage } from '@ionic/storage';
import { OrderData } from '../../providers/orderdata/orderdata';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

public menuitems = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data, public orderData: OrderData) {
  	this.dataService.getData().then((food) =>{
  		if(food){
  			this.menuitems = JSON.parse(food);  		}
  	});

  }
  clearAll(){
    this.menuitems = [];
    this.dataService.clear();
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
    this.dataService.getData().then((food) =>{
      if(food){
        this.menuitems = JSON.parse(food);      }
    });
    console.log(this.navParams.data);
  }


}
