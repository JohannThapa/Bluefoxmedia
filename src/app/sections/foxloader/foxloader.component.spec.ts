import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxloaderComponent } from './foxloader.component';

describe('FoxloaderComponent', () => {
  let component: FoxloaderComponent;
  let fixture: ComponentFixture<FoxloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
