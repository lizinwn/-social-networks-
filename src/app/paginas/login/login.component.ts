import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  state = LoginCompState.LOGIN;
    // Modelos de datos
    loginData = {
      email: '',
      password: ''
    };
  
    registerData = {
      firstName: '',
      lastName: '',
      career: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  
    resetData = {
      email: ''
    };
    // Métodos para manejar el envío
  onLogin() {
    console.log('Datos de inicio de sesión:', this.loginData);
  }

  onRegister() {
    console.log('Datos de registro:', this.registerData);
  }

  onResetPassword() {
    console.log('Correo para restablecer contraseña:', this.resetData.email);
  }
  
  ForgotPassClick() {
    this.state = LoginCompState.FORGOT_PASSWORD;
  }
  CreateAccountClick() {
    this.state = LoginCompState.REGISTER;
  }
  LoginClick() {
    this.state = LoginCompState.LOGIN;
  }

  isLoginState() {
    return this.state == LoginCompState.LOGIN;
  }
  isRegisterState() {
    return this.state == LoginCompState.REGISTER;
  }
  isForgotPasswordState() {
    return this.state == LoginCompState.FORGOT_PASSWORD;
  }

}



export enum LoginCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD

}