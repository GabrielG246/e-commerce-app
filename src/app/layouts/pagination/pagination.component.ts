import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { IData, IProduct } from '../../models/interfaces';
import { DummyApiService } from '../../services/dummy-api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnChanges{
  productsList?: IProduct[]
  dataIsLoaded: boolean = false;
  skip: number= 0;


  //Número de Página
  @Input() skipProducts: number= 0

  constructor(){}

  private _dummyDB= inject(DummyApiService)

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['skipProducts']){
      this.skip= changes['skipProducts'].currentValue;

      this._dummyDB.getLimitedProducts(this.skip).subscribe({
        next: (productos: IData) => {
          this.productsList= productos.products
          this.dataIsLoaded= true
        },
        error: (error: any) =>{
          console.log(error.message);
        }
      })
    }
  }
}
