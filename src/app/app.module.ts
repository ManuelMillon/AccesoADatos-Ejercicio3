import { Customer } from './core/models/customer';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './core/utils/translate';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


/**
 * 
 * 
 */