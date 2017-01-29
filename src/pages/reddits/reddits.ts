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
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private redditService: RedditService) {
    this.getDefault();
    //this.getPost(this.category, this.limit);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditsPage');
  }

  ngOnInit(){
    this.getPost(this.category, this.limit);
  }

  getDefault(){
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    } else {
      this.category='sports';
    }
    
    if(localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit= 10;
    }
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

  changeCategory(){
    this.getPost(this.category, this.limit);
  }

}
