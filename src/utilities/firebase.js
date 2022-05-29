import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set, push } from 'firebase/database';
import{useState, useEffect} from "react";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
//export const storage = getStorage(app);

//GET request (get the data from firebase)
//path = '/book-sales'
//transform is not necessary
//return a JSON object
export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
      const val = snapshot.val();
      if (devMode) { console.log(val); }
      setData(transform ? transform(val) : val);
      setLoading(false);
      setError(null);
    }, (error) => {
      setData(null);
      setLoading(false);
      setError(error);
    });
  }, [path, transform]);

  return [data, loading, error];
};

 //POST request (add stuff to the database)
 export const addData = (path, value) =>{
  push(ref(database, path), value);
}

//PATCH request (change stuff in the database)
export const setData = (path, value) => (
  set(ref(database, path), value)
);