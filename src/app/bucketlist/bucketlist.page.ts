import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'bucketlist.page.html',
  styleUrls: ['bucketlist.page.scss'],
  standalone: false,
})
export class BucketListPage implements OnInit {

  constructor() {}


  ngOnInit() {
    // Check localStorage for the saved theme state
    const savedTheme = localStorage.getItem('dark-mode');
    const isDark = savedTheme === 'true'; // Convert string to boolean

    // Apply the theme globally
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
}
