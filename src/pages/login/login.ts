import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { usercreds } from '../../models/interfaces/usercreds';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
  	this.authservice.login(this.credentials).then((res: any) => {
  		if(!res.code)
  			this.navCtrl.setRoot('TabsPage');
  		else
  			alert(res);
  	})
  }

  signUp() {
    this.navCtrl.push('SignupPage');
  }

  passwordreset() {
    this.navCtrl.push('PasswordresetPage');
  }
}