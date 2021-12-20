
import { Component } from '@angular/core';
import { FirebaseService } from './analytics/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Page1', url: '/page-1' },
    { title: 'Page2', url: '/page-2' }
  ];

  constructor(private analytics: FirebaseService) {
    analytics.initialize();
  }

  ngOnInit() {
    // Pretend that this is like a "user logged in" event, and set user ID
    this.analytics.setUserId({
      userId: 'TestIonicAppUser'
    });
  }
}
