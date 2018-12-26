import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingPage } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageSlotComponent } from './page-slot/page-slot.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageDaftarComponent } from './page-daftar/page-daftar.component';
// import { PagePraktikumComponent } from './page-praktikum/page-praktikum.component';

@NgModule({
  declarations: [
    AppComponent,
    // PagePraktikumComponent
    routingPage,
    PageSlotComponent,
    PageNotFoundComponent,
    PageLandingComponent,
    PageAboutComponent,
    PageDaftarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
