import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HeaderComponent } from "./paginas/header/header.component";
import { AuthService } from './servicios/auth.service';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'liseth';
  isUserLoggedIn  : boolean = false;
  constructor(private authService: AuthService){
    
    this.subscribeToAuthStatus();

  }

   
  subscribeToAuthStatus() {
    this.authService.userStatus$.subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
      console.log('¿Usuario logueado?:', this.isUserLoggedIn);
      if (isLoggedIn) {
        const user = this.authService.getCurrentUser();
        console.log('Usuario actual:', user?.email);
      }
    });
  }
}
