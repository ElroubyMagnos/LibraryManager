import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonhomeComponent } from './anonhome.component';

describe('AnonhomeComponent', () => {
  let component: AnonhomeComponent;
  let fixture: ComponentFixture<AnonhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnonhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnonhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
