import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPrintingComponent } from './paper-printing.component';

describe('PaperPrintingComponent', () => {
  let component: PaperPrintingComponent;
  let fixture: ComponentFixture<PaperPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
