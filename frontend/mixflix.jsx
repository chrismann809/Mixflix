import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

import { signup, login, logout } from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
          session: { id: window.currentUser.id },
          entities: {
            users: { [window.currentUser.id]: window.currentUser }
          }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store}/>, root);
})