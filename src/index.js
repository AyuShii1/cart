import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import CartItem from './CartItem';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSbyvEorQyhsnwccJRki8r4UaPH3GkC2w",
  authDomain: "cart-b21f8.firebaseapp.com",
  projectId: "cart-b21f8",
  storageBucket: "cart-b21f8.appspot.com",
  messagingSenderId: "611169393797",
  appId: "1:611169393797:web:50725f53db9eb7fc395dec"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
