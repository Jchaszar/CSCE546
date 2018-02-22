import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderData {


  constructor(public storage: Storage) {
  	
  }

  getData(){
  	return this.storage.get('order');
  }
  save(data){
  	let newData = JSON.stringify(data);
  	this.storage.set('order', newData);
  }
  clear(){
  	this.storage.clear();
  }
}