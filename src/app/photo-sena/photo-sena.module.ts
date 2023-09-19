import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoSenaPageRoutingModule } from './photo-sena-routing.module';

import { PhotoSenaPage } from './photo-sena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoSenaPageRoutingModule
  ],
  declarations: [PhotoSenaPage]
})
export class PhotoSenaPageModule {}
