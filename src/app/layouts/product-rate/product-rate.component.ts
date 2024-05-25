import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-rate',
  standalone: true,
  imports: [],
  templateUrl: './product-rate.component.html',
  styleUrl: './product-rate.component.css'
})
export class ProductRateComponent implements OnChanges{
  parteEntera: number= 0;
  decimal: number= 0
  arrayRate: number[]= []

  @Input() rating: number= 0;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rating']){

      this.arrayRate= []
      this.parteEntera= Math.floor(this.rating)
      this.decimal= this.rating-this.parteEntera
    
      if(this.parteEntera>=1){
        for (let index = 0; index < this.parteEntera; index++) {
          this.arrayRate.push(1);
        }
      }
      if(this.decimal > 0.3 && this.decimal < 1){
        this.arrayRate.push(0.5)
      }
      if(this.rating<=4){
        let nullStars= Math.floor(5-this.rating);
    
        for (let index = 0; index < nullStars; index++) {
          this.arrayRate.push(0)
        }
      }
    
      console.log(this.arrayRate);
      console.log(this.rating);
    }
  }



}
