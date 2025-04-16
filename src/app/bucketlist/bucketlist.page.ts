import { Component, OnInit } from '@angular/core';
import { WishService } from '../services/wish.service';
import { firstValueFrom } from 'rxjs';
import { RefreshService } from '../services/refresh.service'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'bucketlist.page.html',
  styleUrls: ['bucketlist.page.scss'],
  standalone: false,
})
export class BucketListPage implements OnInit {
  wishes: any[] = []; // Array to store wishes

  constructor(private wishService: WishService, private refreshService: RefreshService) {}

  ngOnInit() {
    //Load all wishes when page is loaded
    this.loadWishes();

    //Look out for refresh
    this.refreshService.getRefreshObservable().subscribe(() => {
      this.reloadData();
    });
  }

  //Function to load wishes from backend server using WishService
  async loadWishes() {
    try {
      const data = await firstValueFrom(this.wishService.getWishes());
      this.wishes = data; // Assign the fetched wishes to the local array
    } 
    catch (error) {
      console.error('Error fetching wishes:', error);
    }
  }

  reloadData() {
    this.loadWishes(); // Refresh the list of wishes
  }

  async deleteWish(id: string) {
    try {
      await firstValueFrom(this.wishService.deleteWish(id));
      
      this.wishes = this.wishes.filter((wish) => wish._id !== id);
      alert('Wish deleted successfully!');
    } 
    catch (error) {
      console.error('Error deleting wish:', error);
      alert('Failed to delete wish.');
    }
  }
}
