import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveIntakeComponent } from './drive-intake.component';

describe('DriveIntakeComponent', () => {
  let component: DriveIntakeComponent;
  let fixture: ComponentFixture<DriveIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveIntakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
