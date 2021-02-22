import { Component, OnInit } from '@angular/core';
import { posts } from 'app/posts';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
  posts = posts
  constructor() { }

  ngOnInit() {
  }

}
