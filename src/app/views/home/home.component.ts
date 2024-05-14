import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from '../../component/products/products.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

} 

