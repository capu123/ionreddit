import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditsPage } from '../pages';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  goBack(){
    //this.navCtrl.pop();
  }

}
