// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnxSJXEraRhyVGXmrxZ6cy7Q4BxkIwB3c",
  authDomain: "tamagochan-98831.firebaseapp.com",
  projectId: "tamagochan-98831",
  storageBucket: "tamagochan-98831.appspot.com",
  messagingSenderId: "801040950752",
  appId: "1:801040950752:web:ee21697d13d6971026b785",
  measurementId: "G-EEKJ8XKQV6"
};

const analyticsMock = {
  logEvent: () => {},
  setCurrentScreen: () => {},
  setUserId: () => {},
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const analytics = isSupported() ? getAnalytics(app) : analyticsMock;
const db = getFirestore(app);
export default db;