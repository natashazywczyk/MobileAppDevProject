import { Component, OnInit } from '@angular/core';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'addWish.page.html',
  styleUrls: ['addWish.page.scss'],
  standalone: false,
})
export class AddWishPage implements OnInit {
  dateAdded: string = ''; //Store date added
  dateGoal: string = ''; //Store date goal
  startDate: string = ''; //Store start date for calender
  endDate: string = ''; //Store end date for calender
  wishTitle: string = ''; //Store wish title
  wishDescription: string = ''; //Store wish description
  wishType: string = ''; //Store wish type
  wishPicture: string = ''; //Store wish picture

  constructor(private wishService: WishService) {
    // Set the minimum date to today
    const today = new Date();
    this.startDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD, as calender reads it in this format
    
     // Set the maximum date to a future date
     const futureDate = new Date(2050, 11, 31);
     this.endDate = futureDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD, as calender reads it in this format
   }

   submitForm() {
    if (!this.wishTitle || !this.wishDescription || !this.wishType || !this.dateGoal || !this.wishPicture) {
      alert('Please fill in all fields.');
      return;
    }

    // Handle form submission logic here
    const newWish = {
      title: this.wishTitle,
      description: this.wishDescription,
      wishType: this.wishType,
      dateAdded: this.startDate,
      dateGoal: this.dateGoal,
      wishPicture: this.wishPicture,
    };
    console.log(newWish);

    this.wishService.addWish(newWish).subscribe(
      (response) => {
        console.log('Wish added successfully:', response);
        alert('Wish has been added');
        this.resetForm();
      },
      (error) => {
        console.error('Error adding wish:', error);
        alert('Failed to add wish. Please try again. Make sure all fields are filled in');
      }
    );

    this.resetForm();
  }

    ngOnInit() {
      // Check localStorage for the saved theme state
      const savedTheme = localStorage.getItem('dark-mode');
      const isDark = savedTheme === 'true'; // Convert string to boolean
  
      // Apply the theme globally
      document.documentElement.classList.toggle('ion-palette-dark', isDark);
    }

    resetForm() {
      this.wishTitle = '';
      this.wishDescription = '';
      this.wishType = '';
      this.dateGoal = '';
      this.wishPicture = '';
    }
}



