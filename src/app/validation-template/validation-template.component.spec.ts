import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTemplateComponent } from './validation-template.component';

describe('ValidationTemplateComponent', () => {
  let component: ValidationTemplateComponent;
  let fixture: ComponentFixture<ValidationTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationTemplateComponent]
    });
    fixture = TestBed.createComponent(ValidationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
