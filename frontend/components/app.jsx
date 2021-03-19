import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LandingPage from '../components/landing_page/landing_page'
import BrowseContainer from '../components/browse/browse_container'

import { Route, Switch } from 'react-router';

import { AuthRoute, ProtectedRoute, RedirectRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <Switch>
                <NavBarContainer />
            </Switch>
        </header>
        <Switch>
            <RedirectRoute exact path="/" component={LandingPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute exact path="/browse" component={BrowseContainer}/>
        </Switch>
    </div>
);

export default App;