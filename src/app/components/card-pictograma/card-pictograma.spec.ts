import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPictograma } from './card-pictograma';

describe('CardPictograma', () => {
  let component: CardPictograma;
  let fixture: ComponentFixture<CardPictograma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPictograma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPictograma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
