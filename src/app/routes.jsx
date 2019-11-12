import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { About, Help } from '../aboutpage/about.jsx'
import Contact from '../contactpage/contact.jsx'
import Home from '../homepage/home.jsx'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/home' component = { Home } />
            <Route exact path = '/about' component = { About } />
            <Route exact path = '/contact' component = { Contact} />
            <Route exact path = '/help' component = { Help} />
        </Switch>
    )
}