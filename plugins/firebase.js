import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBRQIXjO-hXGkSQ4o16YZG_NpGkXoHf7KA",
  authDomain: "nuxttodo-634ed.firebaseapp.com",
  databaseURL: "https://nuxttodo-634ed.firebaseio.com",
  projectId: "nuxttodo-634ed",
  storageBucket: "nuxttodo-634ed.appspot.com",
  messagingSenderId: "723363041954",
  appId: "1:723363041954:web:3a816af56bdb4c4208fdfb",
  measurementId: "G-1EWJ40NPKS"
};

var app = null;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}
