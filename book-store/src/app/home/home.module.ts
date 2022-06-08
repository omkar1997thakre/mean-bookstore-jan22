import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
