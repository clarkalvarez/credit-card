import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreditCardComponent } from './show-credit-card.component';

describe('ShowCreditCardComponent', () => {
  let component: ShowCreditCardComponent;
  let fixture: ComponentFixture<ShowCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
