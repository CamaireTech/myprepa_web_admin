import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorrectionComponent } from './create-correction.component';

describe('CreateCorrectionComponent', () => {
  let component: CreateCorrectionComponent;
  let fixture: ComponentFixture<CreateCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
