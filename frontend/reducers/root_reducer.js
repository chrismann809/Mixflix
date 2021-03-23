import { combineReducers } from 'redux';

import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import genres from './genres_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors
});

export default rootReducer;
