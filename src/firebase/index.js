import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASc1-Htd2HGzc6aQbiytcQbCKX8yoN8a0",
  authDomain: "vue-fire-auth-48e35.firebaseapp.com",
  projectId: "vue-fire-auth-48e35",
  storageBucket: "vue-fire-auth-48e35.appspot.com",
  messagingSenderId: "433784111195",
  appId: "1:433784111195:web:7c6b44f834edb79a9d7f7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
