import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DummyApiService } from '../../services/dummy-api.service';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userLogin: FormGroup;
  usuarioLogueado: any


  constructor(private fb: FormBuilder) {
    this.userLogin = this.fb.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  private _dummyService = inject(DummyApiService);



  //=== CONTROLADORES DE CLASE ===//
  hasErrors(controlName: string, errorType: string) {
    return this.userLogin.get(controlName)?.hasError(errorType) && this.userLogin.get(controlName)?.touched
  }
  dontHasErrors(controlName: string, errorType: string) {
    return !(this.userLogin.get(controlName)?.hasError(errorType)) && this.userLogin.get(controlName)?.touched
  }

  //=== METODO LOGIN ===//
  loginUser() {
    //Guarda los datos de la credencial
    const userCredentials= {
      username: this.userLogin.get('username')?.value,
      password: this.userLogin.get('password')?.value
    }

    //Valida las credenciales y retorna la información general 
    this._dummyService.getUserToken(userCredentials).subscribe(
      data =>{
        console.log('Credenciales validas.');
        //Extrae el token de los datos
        const userToken= data.token;

        //Loguea al usuario con el token de la credencial validada
        this._dummyService.loginUser(userToken).subscribe(
          user =>{
            console.log('Usuario logueado');
            this.usuarioLogueado= user;
            console.log(this.usuarioLogueado);
          },
          err=>{
            console.log('Error al loguearse:', err);
          }
        )
      },
      error =>{
        console.log('Error al autenticar credenciales:', error);
      }
    )
  }


}


