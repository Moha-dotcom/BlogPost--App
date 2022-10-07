import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  @Output() receive  = new EventEmitter<{ author : string,  header: string, blogpost : string}>();

  @Output() lake = {};


  constructor() { }

  ngOnInit(): void {
  }

  ProjectInputs(authorInput: HTMLInputElement, postheaderInput: HTMLInputElement, Postinput: HTMLInputElement) {
    this.receive.emit({author : authorInput.value , header: postheaderInput.value, blogpost : Postinput.value})
  }
}
