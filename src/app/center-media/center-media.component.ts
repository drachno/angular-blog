import { Component, OnInit } from '@angular/core';
import { posts } from '../posts'


@Component({
  selector: 'app-center-media',
  templateUrl: './center-media.component.html',
  styleUrls: ['./center-media.component.css']
})
export class CenterMediaComponent implements OnInit {
  posts = posts;
  constructor() { }

  ngOnInit() {
  }

}
