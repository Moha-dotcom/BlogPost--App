import { Component, OnInit, Input } from '@angular/core';
import {blog} from "../Entity/blogs.model";



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  // @ts-ignore
  @Input() element : blog
  constructor() { }
  ngOnInit(): void {
  }
}
