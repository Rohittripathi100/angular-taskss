import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnProductComponent } from './learn-product.component';

describe('LearnProductComponent', () => {
  let component: LearnProductComponent;
  let fixture: ComponentFixture<LearnProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
