import logo from './logo.svg';
import './App.css';
import { Body } from './Body.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from './pages/calendar.js';
import Goals from './pages/goals.js';
import Resources from './pages/resources.js'
import Title from './Title.js';
import Intro1 from './pages/Intro1.js';
import React from 'react';
import Navbar from "./components/navbar.js"

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaRegCalendarCheck, FaSeedling, FaRegLightbulb, FaLightbulb} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Intro1 />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/resources' element={<Resources/>}/>
      </Routes>
      </Router>
      {/* <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Calendar',
                itemId: '/calendar',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <FaRegCalendarCheck name="calendar" />,
              },
              {
                title: 'Goals',
                itemId: '/goals',
                elemBefore: () => <FaSeedling name="seedling" />,
              },
              {
                title: 'Resources',
                itemId: '/resources',
                elemBefore: () => <FaLightbulb name="seedling" />,
              },
            ]}
          /> */}
          <div id='calendar'></div>
        <Body/>
    </div>
  );
}

export default App;
