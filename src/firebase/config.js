import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHkaa00vmi6WwT7ENE46Jl2P6lEvrjbnw",
  authDomain: "olx-clone-6abf1.firebaseapp.com",
  projectId: "olx-clone-6abf1",
  storageBucket: "olx-clone-6abf1.appspot.com",
  messagingSenderId: "385746106879",
  appId: "1:385746106879:web:d62264a6a5d5f39edf8fca",
};

export default firebase.initializeApp(firebaseConfig);
