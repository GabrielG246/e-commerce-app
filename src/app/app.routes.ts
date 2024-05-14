import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './views/home/home.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserLoginComponent } from './component/user-login/user-login.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'registro-usuario', component: UserFormComponent},
    {path: 'logueo-usuario', component: UserLoginComponent}
];
