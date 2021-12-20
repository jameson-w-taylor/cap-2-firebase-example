# Capacitor v2 + Firebase Example (iOS and web platforms)
This application demonstrates how to integrate Firebase with Capacitor v2 applications, specifically for the iOS and web platforms.
Below are the instructions needed to setup a Google Analytics property and enable live-view debugging.

**ADVISORY:** You _really_ should be upgrading to Capacitor v3, and this is simply an example of how to get this integration working with v2.
You should assume that any v2 plugins no longer receive updates, and plan to migrate to v3 when possible.

## Usage
To use this application, start at step #3 in the instructions below.
They generate the needed configurations for the iOS/web platforms.

This example will set `userId` to "TestIonicAppUser" and track screen/page views as you navigate.
Page 1 offers a button to trigger a custom analytics event: `my_custom_event`.

## App Setup
1. Install the Capacitor v2 version of `@capacitor-community/firebase-analytics`.
    ```bash
    npm install @capacitor-community/firebase-analytics@capacitor2-lts
    ```
2. Follow the usage [directions](https://github.com/capacitor-community/firebase-analytics/tree/capacitor-v2#usage) for the plugin. Pay attention to the import style, as this is needed for everything to initialize properly.
3. [Create a Google Analytics property](https://support.google.com/analytics/answer/9304153) and [add a data stream for iOS](https://support.google.com/analytics/answer/9304153#zippy=%2Cios-app-or-android-app).
    * Add the generated plist file [to your native project](https://github.com/capacitor-community/firebase-analytics/tree/capacitor-v2#ios).
5. [Add a web app](https://firebase.google.com/docs/analytics/get-started?platform=web) to your project in Firebase.
    * Copy the config into the environment file (`firebaseInitOptions`) to use when initializing for the web platform.
6. Before deplying your app to iOS, make sure to [enable debug view](https://github.com/capacitor-community/firebase-analytics/tree/capacitor-v2#enable-debug-view) to see events in real-time.
    * To enable debug view for the web platform, install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) chrome extension