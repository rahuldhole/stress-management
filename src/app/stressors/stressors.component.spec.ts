import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressorsComponent } from './stressors.component';

describe('StressorsComponent', () => {
  let component: StressorsComponent;
  let fixture: ComponentFixture<StressorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StressorsComponent]
    });
    fixture = TestBed.createComponent(StressorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
