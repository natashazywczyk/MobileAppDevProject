import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'addWish.page.html',
  styleUrls: ['addWish.page.scss'],
  standalone: false,
})
export class AddWishPage {
  dateAdded: string = ''; // Property to store the selected date
  startDate: string = '';
  endDate: string = '';

  constructor() {
    // Set the minimum date to today
    const today = new Date();
    this.startDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD, as calender reads it in this format
    
     // Set the maximum date to a future date
     const futureDate = new Date(2050, 11, 31);
     this.endDate = futureDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD, as calender reads it in this format
   }
}

