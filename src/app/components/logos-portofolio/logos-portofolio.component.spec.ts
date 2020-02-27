import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosPortofolioComponent } from './logos-portofolio.component';

describe('LogosPortofolioComponent', () => {
  let component: LogosPortofolioComponent;
  let fixture: ComponentFixture<LogosPortofolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogosPortofolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosPortofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
