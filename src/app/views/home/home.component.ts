import { Component, OnInit, inject } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';
import { IProduct } from '../../models/interfaces';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  productsList?: IProduct[]
  dataIsLoaded: boolean = false


  constructor(){}

  private _dummyDB = inject(DummyApiService);

  ngOnInit(): void {
    this._dummyDB.getAllProducts().subscribe({
      next: (productos: IProduct[]) => {
        this.productsList= productos
      },
      error: (error: any) =>{
        console.log(error);
      }
    })
    
    this.dataIsLoaded=true
  }

  verDatos(): void{
    console.log(this.productsList);
  }
} 

