import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationbComponent } from './registrationb.component';

describe('RegistrationbComponent', () => {
  let component: RegistrationbComponent;
  let fixture: ComponentFixture<RegistrationbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
