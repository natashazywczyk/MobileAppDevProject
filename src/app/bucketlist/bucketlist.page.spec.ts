import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BucketListPage } from './bucketlist.page';

describe('BucketListPage', () => {
  let component: BucketListPage;
  let fixture: ComponentFixture<BucketListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BucketListPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BucketListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
