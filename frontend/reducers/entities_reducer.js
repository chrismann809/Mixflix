import { combineReducers } from 'redux';

import users from './users_reducer';
import genres from './genres_reducer';
import list from './lists_reducer';

export default combineReducers({
  users,
  genres,
  list
});
