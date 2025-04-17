import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditWishPage } from './edit-wish.page';

describe('EditWishPage', () => {
  let component: EditWishPage;
  let fixture: ComponentFixture<EditWishPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
