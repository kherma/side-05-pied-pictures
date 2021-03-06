import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import appReducer from './appRedux';
import imagesReducer from './imagesRedux';
import infoReducer from './infoRedux';
import favoritesIDReducer from './favoritesIDRedux';
import favoritesReducer from './favoritesRedux';

// define reducers
const reducers = {
  application: appReducer,
  images: imagesReducer,
  imageInfo: infoReducer,
  favoritesID: favoritesIDReducer,
  favorites: favoritesReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
