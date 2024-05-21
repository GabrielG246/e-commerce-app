import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../../models/interfaces';
import { DummyApiService } from '../../services/dummy-api.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productId: number= -1;
  productData: IProduct = {
    id: -1,    
    title: '',
    price: 0,
    description: '',
    category: '',
    thumbnail: '',
    images: [''],
    rating: {rate: 0, count: 0},
  }
  dataLoaded= false;
  activeIndex: number= 0;


  constructor(private route: ActivatedRoute){}

  private _DummyDB= inject(DummyApiService)
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
        this.productId= params['id']
    })

    this._DummyDB.getProduct(this.productId).subscribe({
      next: (product: IProduct)=>{
        this.productData= product;
        this.dataLoaded= true;
      },
      error: (err: any)=>{
        console.log(err);
      }
    })
  }

  isActived($index:number): boolean{
    return $index === this.activeIndex ? true : false;
  }

  nextImage(){
    this.activeIndex < this.productData.images.length ? this.activeIndex++ : this.activeIndex = 0;
  }

  prevImage(){
    this.activeIndex > 0 ? this.activeIndex-- : this.activeIndex = this.productData.images.length-1;
  }

}
