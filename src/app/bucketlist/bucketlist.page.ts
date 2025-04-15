import { Component, OnInit } from '@angular/core';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'bucketlist.page.html',
  styleUrls: ['bucketlist.page.scss'],
  standalone: false,
})
export class BucketListPage implements OnInit {

  wishes: any[] = []; // Array to store wishes

  constructor(private wishService: WishService) {}


  ngOnInit() {
    // Check localStorage for the saved theme state
    const savedTheme = localStorage.getItem('dark-mode');
    const isDark = savedTheme === 'true'; // Convert string to boolean

    // Apply the theme globally
    document.documentElement.classList.toggle('ion-palette-dark', isDark);

    this.wishes = this.wishService.getWishes();
  }
}
