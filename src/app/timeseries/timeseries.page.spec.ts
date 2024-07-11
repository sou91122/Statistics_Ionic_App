import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeseriesPage } from './timeseries.page';

describe('TimeseriesPage', () => {
  let component: TimeseriesPage;
  let fixture: ComponentFixture<TimeseriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeseriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
