import React from 'react';
import LandingPageContainer from './landing_page/landing_page_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import { Route, Switch } from 'react-router';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            {/* <LandingPageContainer /> */}
        </header>
        <Switch>
            <Route exact path="/" component={LandingPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        </Switch>
    </div>
);

export default App;