// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp  } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcj6RUC0MF5DvQH9qfx35b-RqeygrIhOs",
  authDomain: "insta-clone-b9e48.firebaseapp.com",
  projectId: "insta-clone-b9e48",
  storageBucket: "insta-clone-b9e48.appspot.com",
  messagingSenderId: "143127105706",
  appId: "1:143127105706:web:bf559bf09b07e87d70c0d3"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export{app,db,storage};