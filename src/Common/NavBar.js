import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <React.Fragment>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/about">About</Link>
        </React.Fragment>
    );
}

export default NavBar;