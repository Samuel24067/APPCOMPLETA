import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  correo: string= '';
  nombre_De_Usuario: string =  '';
  contrasena: string=''; 
  confirmarContrasena: string='';

  mensaje: string ='';

  mensajeError: string ='';
  
  
  data: any = [];

  usuario: any= [];

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  validarCampos(){
    this.usuario = localStorage.getItem(this.correo);
    if(this.usuario == null){
      if(this.correo== "" || this.correo==null || this.correo==undefined ||
          this.nombre_De_Usuario== "" || this.nombre_De_Usuario==null || this.nombre_De_Usuario==undefined ||
          this.contrasena== "" || this.contrasena==null || this.contrasena==undefined||
          this.confirmarContrasena== "" || this.confirmarContrasena==null || this.confirmarContrasena==undefined){
            this.mensajeError = 'No puedes dejar campos vacios'

      }else{
        if(this.contrasena == this.confirmarContrasena){
          this.data[0]= this.nombre_De_Usuario;
          this.data[1]= this.contrasena;
          localStorage.setItem(this.correo, JSON.stringify(this.data))
          this.router.navigate(['/photo-sena']);
        }else{
          this.mensaje = 'Error las contraseña no son iguales'
        }
      }    
    }
  }




  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}


  
  
  
