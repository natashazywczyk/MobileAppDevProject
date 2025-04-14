import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ThemePage {

  constructor() { }


}
