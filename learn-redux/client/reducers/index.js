//THIS IS THE ROOT REDUCER
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

//import the other reducers
import posts from './posts';
import comments from './comments';

//using combineReducers to get the rootReducer
//the routerReducer is an special reducer that comes from react-router-redux and let us keep the navigation information in the state
const rootReducer = combineReducers({posts, comments, routing:routerReducer});


export default rootReducer;