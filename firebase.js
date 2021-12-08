// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN4tanKpxFT_SZvZfxitgPzXJVo6fbaN4",
    authDomain: "tinder-yt-4de01.firebaseapp.com",
    projectId: "tinder-yt-4de01",
    storageBucket: "tinder-yt-4de01.appspot.com",
    messagingSenderId: "621676818186",
    appId: "1:621676818186:web:b5efc3309cbb1c287794f3",
    measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }