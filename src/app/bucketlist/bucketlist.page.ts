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
  allWishes: any[] = []; // Store all wishes
  selectedType: string = 'all'; //By default, show all wishes

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
      this.allWishes = data; // Store all wishes first
      this.wishes = [...this.allWishes]; // Set initial wishes
      this.filterWishes();
    } 
    catch (error) {
      console.error('Error fetching wishes:', error);
    }
  }

  //Function to filter wishes based on selected type
  //Set default to display all wishes
  filterWishes() {
    if (this.selectedType === 'all') {
      this.wishes = [...this.allWishes];
    } else {
      this.wishes = this.allWishes.filter(wish => wish.wishType === this.selectedType);
    }
  }

  reloadData() {
    this.loadWishes(); // Refresh the list of wishes
  }

  //Function to delete a wish
  async deleteWish(id: string) {
    const confirmDelete = window.confirm('Are you sure you want to delete this wish?');

    //If cancel is clicked, do not delete wish
    if (!confirmDelete) {
      return;
    }

    //Deletes wish from backend server using WishService
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
