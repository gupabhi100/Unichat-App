//import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 export const auth  = firebase.initializeApp({
    apiKey: "AIzaSyBXnqS-kKWMsG3V2L50rPs3ImMSlAwKw-Q",
    authDomain: "unichat-e9ea6.firebaseapp.com",
    projectId: "unichat-e9ea6",
    storageBucket: "unichat-e9ea6.appspot.com",
    messagingSenderId: "422017826031",
    appId: "1:422017826031:web:e303069947e21d7089ef1a"
  }).auth();

  