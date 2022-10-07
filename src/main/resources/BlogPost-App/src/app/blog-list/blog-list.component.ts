import { Component, OnInit, Input } from '@angular/core';
import {blog} from "../Entity/blogs.model";



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {



  // @ts-ignore
  @Input() element : { author: string, postheader: string, blogpost: string,  dateposted: string}

  constructor() { }

  ngOnInit(): void {
  }


  onServerAdded(){

  }







}
