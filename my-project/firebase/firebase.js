import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA2QMSlDbJxjk7jfqSeJdvpyMiWnS5v1wk",
    authDomain: "ebiddyarthi.firebaseapp.com",
    projectId: "ebiddyarthi",
    storageBucket: "ebiddyarthi.appspot.com",
    messagingSenderId: "237555689730",
    appId: "1:237555689730:web:ba7347d9d7aaa51c83fa1b",
    measurementId: "G-2XF1LY3LF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;