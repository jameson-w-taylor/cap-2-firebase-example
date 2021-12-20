// https://github.com/capacitor-community/firebase-analytics/tree/capacitor-v2#usage
import "@capacitor-community/firebase-analytics";

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { Plugins } from "@capacitor/core";
import { firebaseInitOptions } from '../../environments/environment';

const { FirebaseAnalytics } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private platform: Platform, private router: Router) { }

  async initialize(): Promise<void> {
    if (!this.platform.is('hybrid')) {
      // When running on the web platform, you need to initialize Firebase like this
      // Add a web app to your firebase console, and copy the config object from there
      // Firebase Docs: https://firebase.google.com/docs/analytics/get-started?platform=web
      await FirebaseAnalytics.initializeFirebase(firebaseInitOptions);
    } else {
      // When running on iOS/android platforms the initialization is handled by GoogleService-Info.plist/google-services.json that you copy into your native project
      // Plugin Docs:           https://github.com/capacitor-community/firebase-analytics#setup
      // Google Analytics Docs: https://support.google.com/analytics/answer/9304153#zippy=%2Cios-app-or-android-app
    }

    this.trackPageViews();
  }

  logEvent(options: { name: string; params: object; }): Promise<void> {
    return FirebaseAnalytics.logEvent(options);
  }

  setUserId(options: { userId: string; }): Promise<void> {
    return FirebaseAnalytics.setUserId(options);
  }

  private async trackPageViews() {
    // Track screen (iOS/android) and page_view (web) events manually because this is a SPA
    this.router.events.forEach(async event => {
      if (event instanceof NavigationEnd) {
        if (this.platform.is('hybrid')) {
          await FirebaseAnalytics.setScreenName({
            screenName: event.url
          });
        } else {
          await FirebaseAnalytics.logEvent({
            name: 'page_view',
            params: {
              page_location: event.url
            }
          });
        }
      }
    });
  }
}
