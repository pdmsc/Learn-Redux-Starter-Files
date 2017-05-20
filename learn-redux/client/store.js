import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import RootReducer
import rootReducer from './reducers/index';

//import data
import comments from './data/comments';
import posts from './data/posts';

//default store
const defaultState = {
    posts,
    comments
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

//Uses createStore from Redux to create the store, sending the rootReducer and the defaultState as params
const store = createStore (rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
