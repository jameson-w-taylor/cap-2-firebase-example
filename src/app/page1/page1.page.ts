import { Component } from '@angular/core';
import { FirebaseService } from '../analytics/firebase.service';

@Component({
  selector: 'app-page1',
  templateUrl: 'page1.page.html',
  styleUrls: ['page1.page.scss'],
})
export class Page1Page {
  constructor(private analytics: FirebaseService) {}

  logEvent() {
    // Button click event to log some custom event to see in analytics dashboard
    this.analytics.logEvent({
      name: 'my_custom_event',
      params: {
        something: 'hello'
      }
    });
  }
}
