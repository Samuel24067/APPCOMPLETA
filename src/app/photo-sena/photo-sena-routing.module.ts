import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoSenaPage } from './photo-sena.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoSenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoSenaPageRoutingModule {}
