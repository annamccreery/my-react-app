import React from "react";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
            <li>
                <Link to="/people-list">People List</Link>
            </li>
            <li>
                <Link to="/controlled">Controlled From</Link>
            </li>
            <li>
                <Link to="uncontrolled">Uncontrolled Page</Link>
            </li>
        </ul>
    )
}