import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private dbUrl = 'http://localhost:4000/api/wishes'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Add a new wish
  addWish(wish: any): Observable<any> {
    return this.http.post(this.dbUrl, wish); // Send POST request to the backend
  }

  // Get all wishes
  getWishes(): Observable<any[]> {
    return this.http.get<any[]>(this.dbUrl);
  }

  // Delete a wish by ID
  deleteWish(id: string): Observable<any> {
    return this.http.delete(`${this.dbUrl}/${id}`);
  }

  // Get a wish by ID
  getWishById(id: string): Observable<any> {
    return this.http.get(`${this.dbUrl}/${id}`);
  }

  // Update a wish by ID
  updateWish(id: string, updatedWish: any): Observable<any> {
    return this.http.put(`${this.dbUrl}/${id}`, updatedWish);
  }
}
