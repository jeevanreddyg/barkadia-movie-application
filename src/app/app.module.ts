import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { MovieService } from './shared/services/movie/movie.service';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
