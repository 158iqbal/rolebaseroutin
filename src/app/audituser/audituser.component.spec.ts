import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudituserComponent } from './audituser.component';

describe('AudituserComponent', () => {
  let component: AudituserComponent;
  let fixture: ComponentFixture<AudituserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudituserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
