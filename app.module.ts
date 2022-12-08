import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageModule } from "./welcome/welcome.module";
import { HomePageModule } from "./home/home.module";

@NgModule({
    declarations: [AppComponent,
      OneComponent,
      TwoComponent,
      ThreeComponent,
      FourComponent,
      FiveComponent,
      SixComponent,
      SevenComponent,
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule, WelcomePageModule]
})
export class AppModule {}
