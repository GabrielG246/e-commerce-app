import { Component, OnInit, inject } from '@angular/core';
import { PaginationComponent } from '../../layouts/pagination/pagination.component';
import { DummyApiService } from '../../services/dummy-api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  lastPage: number= 1;
  currentPage: number= 1;
  skipProducts: number= 0;
  totalPages: number= 0;
  pages: number[]= [1,2,3,4,5]

  constructor(){}

  private _dummyJson= inject(DummyApiService);

  ngOnInit(): void {
    this._dummyJson.getLengthProducts().subscribe({
      next: (product: any)=>{
        this.totalPages= product.total / 20;
        for (let i = 1; i <= this.totalPages; i++) {
          this.pages.push(i);
        }
      },
      error: (err: any)=>{
        console.log(err);
      }
    })
  }

  nextPage(){
    if (this.currentPage < this.totalPages){
      this.skipProducts+= 20
      this.currentPage++
    }
  }

  previousPage(){
    if(this.currentPage > 1){
      this.skipProducts-=20
      this.currentPage--
    }
  }

  numPage(num: number){
    this.skipProducts= (num-1)*20
    this.currentPage= num
  }
}
