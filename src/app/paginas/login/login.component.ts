import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService){

  }
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
    if(!this.registerData.career && !this.registerData.confirmPassword && !this.registerData.email && !this.registerData.firstName && !this.registerData.lastName && !this.registerData.password){
      alert("Completa todos los campos")
    }else if(!this.igual(this.registerData.password, this.registerData.confirmPassword)){
      alert("La contraseña no coincide")
    }else if(this.registerData.password.length <6){
      alert("La contraseña debe tener minimo 6 caracteres")

    }else{
      this.authService.registro(this.registerData.email, this.registerData.password, this.registerData.firstName, this.registerData.lastName,this.registerData.career)
    }

    
  }
  igual(text: string, text2: string) {
    return text == text2;

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