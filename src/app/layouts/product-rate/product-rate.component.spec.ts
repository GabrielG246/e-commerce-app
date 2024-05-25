import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRateComponent } from './product-rate.component';

describe('ProductRateComponent', () => {
  let component: ProductRateComponent;
  let fixture: ComponentFixture<ProductRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
