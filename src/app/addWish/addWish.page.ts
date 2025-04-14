import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'addWish.page.html',
  styleUrls: ['addWish.page.scss'],
  standalone: false,
})
export class AddWishPage {
  dateAdded: string = ''; //Store date added
  dateGoal: string = ''; //Store date goal
  startDate: string = '';
  endDate: string = '';
  wishTitle: string = ''; //Store wish title
  wishDescription: string = ''; //Store wish description
  wishType: string = ''; //Store wish type
  wishPicture: string = ''; //Store wish picture

  constructor() {
    // Set the minimum date to today
    const today = new Date();
    this.startDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD, as calender reads it in this format
    
     // Set the maximum date to a future date
     const futureDate = new Date(2050, 11, 31);
     this.endDate = futureDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD, as calender reads it in this format
   }

   submitForm() {
    if (!this.wishTitle || !this.wishDescription || !this.wishType || !this.dateAdded || !this.dateGoal || !this.wishPicture) {
      alert('Please fill in all required fields.');
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted successfully:', {
      title: this.wishTitle,
      description: this.wishDescription,
      wishType: this.wishType,
      dateAdded: this.dateAdded,
      dateGoal: this.dateGoal,
      wishPicture: this.wishPicture,
    });
  }
}


