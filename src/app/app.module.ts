import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogListComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
