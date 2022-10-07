import { Component } from '@angular/core';
import {blog} from "./Entity/blogs.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  BlogPost : blog []  = [
  ];

  constructor(private Http :HttpClient) {
  }



  onServerAdd(serverData : { author : string,  header: string, blogpost : string}){
    this.BlogPost.push(new blog(serverData.author, serverData.header, serverData.blogpost, new Date().toLocaleString()))
  }

  onCreatePost(serverData : { author : string,  header: string, blogpost : string}){

    let headerssss = new Headers();

    headerssss.append('Content-Type', 'application/json');
    headerssss.append('Accept', 'application/json');

    headerssss.append('Access-Control-Allow-Credentials', 'true');
    // send Http Request

    let newBlog = new blog(serverData.author, new Date().toLocaleString(), serverData.header, serverData.blogpost );

    // @ts-ignore
    this.Http.post("localhost:8080/api/post", JSON.stringify(newBlog), {headerssss})
    console.log()
    console.log("Posted")


  }

}
