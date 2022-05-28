import logo from './logo.svg';
import './App.css';
import { Body } from './Body.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDIWd2xbBohLKMXIlSoup-sszFrh2w-5p0",
  authDomain: "vibe-check-17779.firebaseapp.com",
  projectId: "vibe-check-17779",
  storageBucket: "vibe-check-17779.appspot.com",
  messagingSenderId: "721321756432",
  appId: "1:721321756432:web:9fb18aed613d0c2aed0795",
  measurementId: "G-V7K1XF01V0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Body/>
      </header>
    </div>
  );
}

export default App;
