import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndiamapPage } from './indiamap.page';

describe('IndiamapPage', () => {
  let component: IndiamapPage;
  let fixture: ComponentFixture<IndiamapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiamapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
