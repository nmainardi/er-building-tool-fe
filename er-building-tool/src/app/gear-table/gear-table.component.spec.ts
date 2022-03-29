import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearTableComponent } from './gear-table.component';

describe('GearTableComponent', () => {
  let component: GearTableComponent;
  let fixture: ComponentFixture<GearTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GearTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GearTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
