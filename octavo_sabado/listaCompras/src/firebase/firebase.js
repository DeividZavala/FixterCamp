import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDRL2ZH4ERCo1IAB7fSxZbS6AKKsNYs_h4",
    authDomain: "react-test-41422.firebaseapp.com",
    databaseURL: "https://react-test-41422.firebaseio.com",
    projectId: "react-test-41422",
    storageBucket: "react-test-41422.appspot.com",
    messagingSenderId: "705059697411"
  };
 const firebaseApp = firebase.initializeApp(config);


export default firebaseApp;