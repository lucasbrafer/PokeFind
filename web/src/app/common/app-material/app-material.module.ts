import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* Material Imports */
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSliderModule,
  ],
  exports: [
    MatButtonModule,
    MatSliderModule
  ]
})

export class AppMaterialModule { }
