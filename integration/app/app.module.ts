import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from 'ngxs';

import { TodoStore } from './todo.store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot([TodoStore])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
