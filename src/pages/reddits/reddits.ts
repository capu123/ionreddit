import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../pages';
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private redditService: RedditService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditsPage');
  }

  ngOnInit(){
    this.getPost('sports', 5);
  }

  getPost(category, limit){
    this.redditService.getPosts(category, limit).subscribe(response=>{
      this.items = response.data.children;
      console.log(response);
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
