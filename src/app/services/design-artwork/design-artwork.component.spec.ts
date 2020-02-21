import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignArtworkComponent } from './design-artwork.component';

describe('DesignArtworkComponent', () => {
  let component: DesignArtworkComponent;
  let fixture: ComponentFixture<DesignArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
