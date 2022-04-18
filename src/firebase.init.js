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
   /*  apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_appId,
    storageBucket:process.env.REACT_APP_projectId,
    messagingSenderId:process.env.REACT_APP_storageBucket,
    appId:process.env.REACT_APP_messagingSenderId, */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth