import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ThemePage implements OnInit {
  paletteToggle = false;

  constructor() {}

  ngOnInit() {
    // Check localStorage for the saved theme state
    const savedTheme = localStorage.getItem('dark-mode');
    const isDark = savedTheme === 'true';
    this.initializeDarkPalette(isDark);

    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => {
      const systemPrefersDark = mediaQuery.matches;
      this.initializeDarkPalette(systemPrefersDark);
    });
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(event: CustomEvent) {
    const isDark = event.detail.checked;
    this.toggleDarkPalette(isDark);
    localStorage.setItem('dark-mode', String(isDark)); // Save the state in localStorage
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}
