import { Component } from '@angular/core';
import { IUser } from '../../models/interfaces';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userLogueado?: IUser;
  isUserLogued?: boolean;
  



}
