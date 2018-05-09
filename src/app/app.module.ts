import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatTableModule, MatToolbarModule,MatPaginatorModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
      ],
  imports: [BrowserModule,CommonModule, MatToolbarModule, MatInputModule, MatTableModule,MatPaginatorModule,BrowserAnimationsModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule,MatPaginatorModule],
  bootstrap: [AppComponent]
})
export class AppModule {
    ngDoBootstrap() { console.log("ngDoBootStrap running"); }
  }
