import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicModule } from './components/dynamic.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations    : [
                      AppComponent
                    ],
  imports         : [
                      BrowserModule,
                      BrowserAnimationsModule,
                      HttpClientModule,
                      AppRoutingModule,
                      DynamicModule,
                      NgbModule
                    ],
  providers       : [],
  bootstrap       : [
                      AppComponent
                    ]
})
export class AppModule { }
