import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import LandingPage from '../components/landing_page/landing_page';
import BrowseContainer from '../components/browse/browse_container';
import InfoBarContainer from '../components/info_bar/info_bar_container';
import MoviePlayer from '../components/movie_player/movie_player';
import MyListContainer from "../components/my_list/my_list_container";

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
            <ProtectedRoute exact path="/watch/:id" component={MoviePlayer}/>
            <ProtectedRoute exact path="/browse/my-list" component={MyListContainer}/>
        </Switch>
        <footer>
            <Switch>
                <InfoBarContainer />
            </Switch>
        </footer>
    </div>
);

export default App;