import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingDetailsComponent } from './finding-details.component';

describe('FindingDetailsComponent', () => {
  let component: FindingDetailsComponent;
  let fixture: ComponentFixture<FindingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
