import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDIWd2xbBohLKMXIlSoup-sszFrh2w-5p0",
    authDomain: "vibe-check-17779.firebaseapp.com",
    databaseURL: "https://vibe-check-17779-default-rtdb.firebaseio.com",
    projectId: "vibe-check-17779",
    storageBucket: "vibe-check-17779.appspot.com",
    messagingSenderId: "721321756432",
    appId: "1:721321756432:web:9fb18aed613d0c2aed0795",
    measurementId: "G-V7K1XF01V0"
  };

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);