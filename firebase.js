import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAUY7LrRUeY2CGGnLkJZxkqPm3dr_43i-g",
    authDomain: "pracfix-737e8.firebaseapp.com",
    projectId: "pracfix-737e8",
    storageBucket: "pracfix-737e8.appspot.com",
    messagingSenderId: "384395829882",
    appId: "1:384395829882:web:a9a1fbfa9013d36eb2d1c3",
    measurementId: "G-BK0WYY8T76"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);