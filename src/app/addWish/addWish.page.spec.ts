import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AddWishPage } from './addWish.page';

describe('AddWishPage', () => {
  let component: AddWishPage;
  let fixture: ComponentFixture<AddWishPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWishPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
