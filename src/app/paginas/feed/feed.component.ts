import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../servicios/auth.service';
import { CrearPostComponent } from '../crear-post/crear-post.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NgFor],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  userData: any;
  constructor(private dialog : MatDialog, private authService: AuthService){
  
  this.authService.userData1$.subscribe((data) => {
    this.userData = data;
    
  });
}
  crearPost(){
    this.dialog.open(CrearPostComponent);
  }
}
