import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// This is used to allow Angular to bind to <input> and other misc items
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
