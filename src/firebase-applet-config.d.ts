/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

declare module "*/firebase-applet-config.json" {
  interface FirebaseAppletConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    firestoreDatabaseId: string;
  }
  const value: FirebaseAppletConfig;
  export default value;
}
