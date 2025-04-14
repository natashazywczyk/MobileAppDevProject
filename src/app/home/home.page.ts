import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Check localStorage for the saved theme state
    const savedTheme = localStorage.getItem('dark-mode');
    const isDark = savedTheme === 'true'; // Convert string to boolean

    // Apply the theme globally
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }

  goToTheme() {
    this.router.navigate(['/theme']); // Navigates tso sthe theme page
  }

}

