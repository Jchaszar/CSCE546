import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  loading: Loading;
  registerPage = SignupPage;
  password: string = '';
  email: string = '';

  constructor(public navCtrl: NavController, private loadCtrl: LoadingController, private authPvdr: AuthProvider) { }

  ionViewDidLoad() {
    console.log('Initiated Signin');
  }

  public signIn() {
     let loader = this.loadCtrl.create({
      content: 'Signing in...'
    });
    if(this.email == "" || this.password == ""){
      alert('Enter an input for all fields')
    }
    this.authPvdr.loginUser(this.email,this.password).then(authData => {
        //loader.present();
        //loader.dismissAll();
        this.navCtrl.setRoot(TabsPage);
        
      
    }, (error) => {
      alert('Invalid username or password');
    });
    //loader.dismissAll();
  }

}
