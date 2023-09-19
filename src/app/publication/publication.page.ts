import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
  providers: [Storage],
})
export class PublicationPage implements OnInit {

  titulo: string ='' ;
  descripcion: string ='';
  imageSource: any;

  constructor(private router: Router, private storage: Storage) { 
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['./photo-sena'])
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Camera
    });

    this.imageSource = image.dataUrl;
  }

  formValid(): boolean {
    return this.titulo && this.descripcion && this.imageSource;
  }

  submitForm() {
    if (this.formValid()) {
      this.router.navigate(['/photo-sena']);
      const newPublication = {
        titulo: this.titulo,
        descripcion: this.descripcion,
        foto: this.imageSource
        
      };

      // Obtener las publicaciones actuales del almacenamiento
      this.storage.get('publicaciones').then((publicaciones: any[]) => {
        if (publicaciones) {
          publicaciones.push(newPublication);
        } else {
          publicaciones = [newPublication];
        }

        // Guardar las publicaciones actualizadas en el almacenamiento
        this.storage.set('publicaciones', publicaciones).then(() => {
          console.log('Publicación guardada:', newPublication);
        });
      });
    }
  }
}
