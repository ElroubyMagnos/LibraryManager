import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendrequestComponent } from './sendrequest.component';

describe('SendrequestComponent', () => {
  let component: SendrequestComponent;
  let fixture: ComponentFixture<SendrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendrequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
