import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  login() {

    if (this.email == '123' && this.password == '123') {
      this.router.navigate(['/photo-sena']);
    } else {
      console.log('Usuario y contraseña incorrectos');
    }
  }

}
