import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCanceledComponent } from './order-canceled.component';

describe('OrderCanceledComponent', () => {
  let component: OrderCanceledComponent;
  let fixture: ComponentFixture<OrderCanceledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCanceledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
