import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeumorphicComponent } from './neumorphic.component';

describe('NeumorphicComponent', () => {
  let component: NeumorphicComponent;
  let fixture: ComponentFixture<NeumorphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeumorphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeumorphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
