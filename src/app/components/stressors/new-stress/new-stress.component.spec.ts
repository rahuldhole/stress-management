import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStressComponent } from './new-stress.component';

describe('NewStressComponent', () => {
  let component: NewStressComponent;
  let fixture: ComponentFixture<NewStressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewStressComponent]
    });
    fixture = TestBed.createComponent(NewStressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
