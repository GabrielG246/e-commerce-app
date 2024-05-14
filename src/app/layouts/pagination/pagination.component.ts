import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { IProduct } from '../../models/interfaces';
import { DummyApiService } from '../../services/dummy-api.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnChanges{
  productsList?: IProduct[];
  dataIsLoaded: boolean = false;
  skip: any= 0;


  //Número de Página
  @Input() skipProducts: number = 1

  constructor(){}

  private _dummyDB= inject(DummyApiService)

  //Ciclo onChange 
  ngOnChanges(change: SimpleChanges): void {
    if (change['skipProducts']){
      const skipNumber= change['skipProducts'].currentValue
      this.skip= skipNumber;
    }
    
    /*this._dummyDB.getLimitedProducts(this.pageSkip || 0).subscribe({
      next: (productos: IProduct[]) => {
        this.productsList= productos
        this.dataIsLoaded= true
      },
      error: (error: any) =>{
        console.log(error);
      }
    })*/
  }
}
