import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicchoosePage } from './topicchoose.page';

describe('TopicchoosePage', () => {
  let component: TopicchoosePage;
  let fixture: ComponentFixture<TopicchoosePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicchoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
