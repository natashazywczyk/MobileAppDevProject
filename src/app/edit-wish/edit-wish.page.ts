import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WishService } from '../services/wish.service';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-edit-wish',
  templateUrl: './edit-wish.page.html',
  styleUrls: ['./edit-wish.page.scss'],
  standalone: false
})
export class EditWishPage implements OnInit {
  wishId: string = '';
  dateAdded: string = ''; //Store date added
  dateGoal: string = ''; //Store date goal
  startDate: string = ''; //Store start date for calender
  endDate: string = ''; //Store end date for calender
  wishTitle: string = ''; //Store wish title
  wishDescription: string = ''; //Store wish description
  wishType: string = ''; //Store wish type
  wishPicture: string = ''; //Store wish picture

  constructor(
    private route: ActivatedRoute,
    private wishService: WishService,
    private router: Router,
    private refreshService: RefreshService
  ) {
    const today = new Date();
    this.startDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    const futureDate = new Date(2050, 11, 31);
    this.endDate = futureDate.toISOString().split('T')[0];
  }

  ngOnInit() {
    // Get the wish ID from the route parameters
    this.wishId = this.route.snapshot.paramMap.get('id') || '';
    this.loadWish();
  }

  //Load the wish details from server
  loadWish() {
    this.wishService.getWishById(this.wishId).subscribe(
      (data) => {
        this.wishTitle = data.title;
        this.wishDescription = data.description;
        this.wishType = data.wishType;
        this.dateGoal = data.dateGoal;
        this.wishPicture = data.wishPicture;
      },
      (error) => {
        console.error('Error loading wish:', error);
        alert('Failed to load wish details.');
      }
    );
  }

  //Save edited wish details
  saveWish() {
    const updatedWish = {
      title: this.wishTitle,
      description: this.wishDescription,
      wishType: this.wishType,
      dateAdded: this.startDate,
      dateGoal: this.dateGoal,
      wishPicture: this.wishPicture,
    };

    this.wishService.updateWish(this.wishId, updatedWish).subscribe(
      (response) => {
        console.log('Wish updated successfully:', response);
        alert('Wish updated successfully!');
        
        this.refreshService.triggerRefresh();

        this.router.navigate(['/tabs/bucketlist']); // Navigate to the bucket list page
      },
      (error) => {
        console.error('Error updating wish:', error);
        alert('Failed to update wish. Please try again.');
      }
    );
  }
}
