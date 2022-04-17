// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_vrc0c48WYjx7G1KZb2EiqvUrtMBGRpg",
    authDomain: "independent-service-prov-23191.firebaseapp.com",
    projectId: "independent-service-prov-23191",
    storageBucket: "independent-service-prov-23191.appspot.com",
    messagingSenderId: "799024030862",
    appId: "1:799024030862:web:c55d7f34c1f99b58b0d5df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth