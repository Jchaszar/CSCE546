import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { TabsPage } from '../tabs/tabs';
import { MenuPage } from '../menu/menu';
import firebase from 'firebase';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  public loading: Loading;
  password: string = '';
  username: string = '';
  verify: string = '';
  email: string = '';

  constructor(public navCtrl: NavController, private authPvdr: AuthProvider, private loadCtrl: LoadingController, private alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('Initiate Signup');
  }

  signUp(){
    if(this.email == '' || this.password == '' || this.verify == ''){
      console.log("Empty input for new account")
    }
    else if( this.verify != this.password){
      let alert = this.alertCtrl.create({
        message: "Passwords do not match",
        buttons: [
        {
          text: "Ok",
          role: 'cancel'
        }
        ]
      });
      alert.present();
    }
    else{

    this.authPvdr.signupUser(this.email, this.password).then(() => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(TabsPage);
      });
    }, (error) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadCtrl.create();
    this.loading.present();
  }

}
}
