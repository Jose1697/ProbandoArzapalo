import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PruebaComponent } from './prueba/prueba.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [PruebaComponent],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
})
export class PruebaModule { }
