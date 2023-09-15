import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig={
    apiKey: "AIzaSyDuCIoIem4WdDRudYjlffarcytBQbQyrLs",
    authDomain: "my-app-45846.firebaseapp.com",
    projectId: "my-app-45846",
    storageBucket: "my-app-45846.appspot.com",
    messagingSenderId: "93686841819",
    appId: "1:93686841819:web:df1aecfcb42aa7126aa7fe",
    measurementId: "G-NS0MBVN6BB"
}
export const app = initializeApp(firebaseConfig);
export const Fire_auth = getAuth(app);
export const Firestore = getFirestore(app)