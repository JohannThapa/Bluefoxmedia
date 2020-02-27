import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPortfolioComponent } from './cards-portfolio.component';

describe('CardsPortfolioComponent', () => {
  let component: CardsPortfolioComponent;
  let fixture: ComponentFixture<CardsPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
