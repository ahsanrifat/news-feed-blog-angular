import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './components/login/login.module';
import { BlogModule } from './components/blog/blog.module';
import { NewsfeedModule } from './components/newsfeed/newsfeed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    BlogModule,
    NewsfeedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
