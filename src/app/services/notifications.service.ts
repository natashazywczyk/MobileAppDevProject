import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { WishService } from './wish.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(
    private wishService: WishService,
    private platform: Platform
  ) {
    this.initializeNotifications();
  }

  //Function to allow notification on both local and web
  async initializeNotifications() {
    try {
      // Request permissions for web notifications
      if (this.platform.is('desktop') || this.platform.is('mobileweb')) 
        {
          //If permission for notification is not allowed
            if (Notification.permission !== 'granted') 
            {
              const permission = await Notification.requestPermission();
              console.log('Web notification permission status:', permission);
            }
        }

      //Initial check
      await this.checkWishDates();

      //Then set up interval for future checks
      setInterval(() => this.checkWishDates(), 60000); // Check every minute
    } 
    catch (error) {
      console.error('Error initializing notifications:', error);
    }
  }

  //Check the current date and compare it to all the wish goal dates
  async checkWishDates() 
  {
    try {
      //Check current date
      const today = new Date().toISOString().split('T')[0];
      console.log('Checking wishes for date:', today);

      //Get all wishes from database
      this.wishService.getWishes().subscribe(
        async (wishes) => {
          console.log('Fetched wishes:', wishes);
          
          //Compare current date to the goal date of wish
          for (const wish of wishes) {
            const goalDate = wish.dateGoal.split('T')[0];
            console.log(`Comparing wish "${wish.title}": ${goalDate} with today: ${today}`);
            
            //If current date matches goal date
            if (goalDate === today) {
              console.log('Match found! Showing notification for:', wish.title);
              await this.showNotification(wish);
            }
          }
        },
        (error) => console.error('Error fetching wishes:', error)
      );
    } 
    catch (error) {
      console.error('Error checking wish dates:', error);
    }
  }

  //Function to display notification
  private async showNotification(wish: any) 
  {
    try 
    {
      //If notifications are allowed, show notification
      if (Notification.permission === 'granted') 
        {
          new Notification('Bucket List Goal Ready!', {
          body: `Today is the day for: ${wish.title}`,
          tag: wish._id,
        });
        console.log('Notification shown successfully for:', wish.title);
      } 
      //If notifications were previously denied
      else 
      {
        console.log('Notification permission not granted');
      }
    } 
    catch (error) {
      console.error('Error showing notification:', error);
    }
  }
}