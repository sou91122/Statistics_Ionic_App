import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoosecountryPage } from './choosecountry.page';

describe('ChoosecountryPage', () => {
  let component: ChoosecountryPage;
  let fixture: ComponentFixture<ChoosecountryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosecountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
