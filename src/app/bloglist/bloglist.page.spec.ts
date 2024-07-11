import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloglistPage } from './bloglist.page';

describe('BloglistPage', () => {
  let component: BloglistPage;
  let fixture: ComponentFixture<BloglistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
