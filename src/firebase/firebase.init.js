// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDZogTqgi2pc-sbx76VWnTxn9V7BAKiswg',
    authDomain: 'coffee-store-46e68.firebaseapp.com',
    projectId: 'coffee-store-46e68',
    storageBucket: 'coffee-store-46e68.firebasestorage.app',
    messagingSenderId: '13796055768',
    appId: '1:13796055768:web:0a40c33a2de70cc01e15ad'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

