import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-photo-sena',
  templateUrl: './photo-sena.page.html',
  styleUrls: ['./photo-sena.page.scss'],
})
export class PhotoSenaPage implements OnInit {
  
  data: any[] = [];

  constructor(public http: HttpClient, private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.initStorage();
    this.loadPublications();
  }

  async initStorage() {
    await this.storage.create();
  }

  async loadPublications() {
    const savedPublications = await this.storage.get('publicaciones');
    if (savedPublications) {
      this.data = savedPublications;
    }
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.data = this.data.filter((item) => item.titulo.toLowerCase().indexOf(query) > -1);
  }

  handleRefresh(event: any) {
    this.loadPublications();
    setTimeout(() => {
      event.target.complete(); // Indicar que la operación de actualización ha finalizado
    }); // Ejemplo de tiempo de espera, puedes ajustarlo según necesites
  }

  back() {
    this.router.navigate(['./login'])
  }

  formPublication() {
    this.router.navigate(['./publication'])
  }
}
