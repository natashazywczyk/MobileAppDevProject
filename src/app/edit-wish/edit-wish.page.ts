import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-edit-wish',
  templateUrl: './edit-wish.page.html',
  styleUrls: ['./edit-wish.page.scss'],
  standalone: false
})
export class EditWishPage implements OnInit {
  wishId: string = '';
  wish: any = {}; //Store the wish details

  constructor(
    private route: ActivatedRoute,
    private wishService: WishService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get the wish ID from the route parameters
    this.wishId = this.route.snapshot.paramMap.get('id') || '';
    this.loadWish();
  }

  //Load the wish details from server
  loadWish() {
    this.wishService.getWishById(this.wishId).subscribe(
      (data) => {
        this.wish = data; // Assign the fetched wish details
      },
      (error) => {
        console.error('Error loading wish:', error);
        alert('Failed to load wish details.');
      }
    );
  }

  //Save edited wish details
  saveWish() {
    this.wishService.updateWish(this.wishId, this.wish).subscribe(
      (response) => {
        alert('Wish updated successfully!');
        this.router.navigate(['/bucketlist']); //By default go back to bucketlist page
      },
      (error) => {
        console.error('Error updating wish:', error);
        alert('Failed to update wish. Please try again.');
      }
    );
  }
}
