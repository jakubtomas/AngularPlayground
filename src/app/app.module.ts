import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../modules/material.module";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { Registration2Component } from './components/registration2/registration2.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationbComponent } from './components/registrationb/registrationb.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { PostschildComponent } from './components/postschild/postschild.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    Registration2Component,
    PostsComponent,
    PostComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    RegistrationbComponent,
    PlaygroundComponent,
    PostschildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
