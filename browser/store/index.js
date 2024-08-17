import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunks from 'redux-thunk';

import minions from './minions';
import meetings from './meetings';
import ideas from './ideas';
import selectedMinion from './selectedMinion';
import selectedIdea from './selectedIdea';
import work from './work';
import appState from './appState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    minions,
    meetings,
    ideas,
    selectedMinion,
    selectedIdea,
    work,
    appState,
  }),
  composeEnhancers(
    applyMiddleware(thunks)
  )
)

export default store;
