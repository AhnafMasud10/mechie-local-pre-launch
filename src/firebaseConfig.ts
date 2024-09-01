import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, Analytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let analytics: Analytics | undefined;
let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const db = getFirestore(app);

if (typeof window !== "undefined") {
  // Check if analytics is supported and initialize
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

//process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

// // export { app, analytics };

// // export const db=getFirestore(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBJ9Q1mTymQDOdDwlnFbriBWsK2V06_r3Y",
//   authDomain: "mechie-pre-launch.firebaseapp.com",
//   projectId: "mechie-pre-launch",
//   storageBucket: "mechie-pre-launch.appspot.com",
//   messagingSenderId: "391500081033",
//   appId: "1:391500081033:web:5876db6d910f67eeb0e358",
//   measurementId: "G-386RZ7TX47"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db=getFirestore(app);
