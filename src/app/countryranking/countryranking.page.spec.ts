import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryrankingPage } from './countryranking.page';

describe('CountryrankingPage', () => {
  let component: CountryrankingPage;
  let fixture: ComponentFixture<CountryrankingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryrankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
