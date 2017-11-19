import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule }  from "@angular/router";

import { AppComponent }        from "./app.component";
import { NavigationComponent } from "./Navigation";
import { AboutComponent }      from "./about/About";
import { HomeComponent }       from "./home/Home";
import {BlogComponent}         from "./blog/blog";
import {PostComponent}         from "./blog/post/post";

const routing = RouterModule.forRoot([
  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
    {path: "blog", component: BlogComponent},
    {path: "post", component: PostComponent},
  { path: "**", redirectTo: "home", pathMatch: "full" }

]);

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    HomeComponent,
      BlogComponent,
      PostComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
