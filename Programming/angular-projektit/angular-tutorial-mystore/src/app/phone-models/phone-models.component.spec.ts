import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneModelsComponent } from './phone-models.component';

describe('PhoneModelsComponent', () => {
  let component: PhoneModelsComponent;
  let fixture: ComponentFixture<PhoneModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
