import { Component } from '@angular/core';
import {blog} from "./Entity/blogs.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ts-ignore
  loadfeatures : 'blog';

  ngOnInit(){
    this.onFetchData();
  }



  constructor(private Http :HttpClient) {
  }


  // @ts-ignore
  BlogPost : blog [] = []


  // onServerAdd(serverData: { author: string; header: string; post: string }){
  //   this.BlogPost.push(new blog(serverData.author, serverData.header, serverData.post, new Date().toLocaleString()))
  // }

  onCreatePost(serverData: { author: string; header: string; post: string }){

    // send Http Request\
    let newBlog = new blog(serverData.author, serverData.header, serverData.post,new Date().toLocaleString() );
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    // @ts-ignore
    this.Http.post("http://localhost:8080/api/post", newBlog, headers).subscribe(responseData => {
      console.log(responseData)
    })

    console.log(newBlog)
  }

  onFetchData (){
     this.Http.get("http://localhost:8080/api/post")
      .pipe(map((responseDatas) => {

        const postArray : blog[] = [];
        for(const keys in responseDatas){
          if(responseDatas.hasOwnProperty(keys)){

            // @ts-ignore
            postArray.unshift( {...responseDatas[keys], id: keys})
          }
        }
        return postArray;
      }))
      .subscribe(posts => {



        this.BlogPost = posts
    })
  }





  onNavigate(feature: string) {
      // @ts-ignore
    this.loadfeatures = feature;
  }
}
