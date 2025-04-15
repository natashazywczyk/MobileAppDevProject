import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private wishes: any[] = []; // Array to store wishes

  constructor() {}

  // Add a new wish
  addWish(wish: any) {
    this.wishes.push(wish);
  }

  // Get all wishes
  getWishes() {
    return this.wishes;
  }
}
