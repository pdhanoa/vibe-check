import React from 'react';
import { Link } from "react-router-dom";

// Make a navbar component.

const Navbar = () => {
    return (
        <div id="navbar">
            <li>
                <Link to="/calendar">Calendar</Link>
            </li>
            <li>
                <Link to="/goals">Goals</Link>
            </li>
            <li>
                <Link to="/resources">Resources</Link>
            </li>
        </div>
    );

}

export default Navbar;