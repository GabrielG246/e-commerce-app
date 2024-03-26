import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './views/home/home.component';
import { UserFormComponent } from './component/user-form/user-form.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'registro-usuario', component: UserFormComponent}
];
