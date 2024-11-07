import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product01Component } from './product01.component';

describe('Product01Component', () => {
  let component: Product01Component;
  let fixture: ComponentFixture<Product01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Product01Component]
    });
    fixture = TestBed.createComponent(Product01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
