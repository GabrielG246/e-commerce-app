import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import { DummyApiService } from '../../services/dummy-api.service';
import { IUser } from '../../models/interfaces';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  datosUsuario: FormGroup;

  constructor (private formbuilder: FormBuilder){
    this.datosUsuario = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    }
    );
  }

  private _servicio = inject(DummyApiService)

  hasErrors(controlName: string, errorType: string){
    return this.datosUsuario.get(controlName)?.hasError(errorType) && this.datosUsuario.get(controlName)?.touched
  }

  dontHasErrors(controlName: string, errorType: string){
    return !this.datosUsuario.get(controlName)?.hasError(errorType) && this.datosUsuario.get(controlName)?.touched
  }

  passwordMatchValidator(formGroup: FormGroup){
    const passwordControl = formGroup.get('password');
    const confirmPaswordControl = formGroup.get('confirmPassword');

    if(confirmPaswordControl?.hasError('required')){
      confirmPaswordControl?.setErrors({isRequired: true})
    }
    else if (passwordControl?.value !== confirmPaswordControl?.value){
      confirmPaswordControl?.setErrors({mismatch: true})
    }
    else{
      confirmPaswordControl?.setErrors(null);
    }

  }

  

  addUser(){
    const data: IUser = {
      firstName: this.datosUsuario.get('firstName')?.value,
      lastName: this.datosUsuario.get('lastName')?.value,
      email: this.datosUsuario.get('email')?.value,
      password: this.datosUsuario.get('password')?.value
    }
  }



}
