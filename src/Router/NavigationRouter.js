import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import About from '../About/About';
import Search from '../Search/Search';
import NavBar from '../Common/NavBar';
import Home from '../Home/Home';

function NavigationRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <Route exact path="/" render={() => (
                <Home />
            )}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/about" component={About}></Route>
        </BrowserRouter>
    );
}

export default NavigationRouter;