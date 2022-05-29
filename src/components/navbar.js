import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
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