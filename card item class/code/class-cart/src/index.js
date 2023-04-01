import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7NIpxfWgdXjxUhhX8VZmbZG6pn_8hEAs",
  authDomain: "cart-a9d9f.firebaseapp.com",
  projectId: "cart-a9d9f",
  storageBucket: "cart-a9d9f.appspot.com",
  messagingSenderId: "637697628893",
  appId: "1:637697628893:web:7aebdc997b5c3f1094d934"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));
