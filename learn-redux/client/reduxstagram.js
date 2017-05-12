import React from 'react';
import { render } from 'react-dom';

//import CSS
import css from './styles/style.styl';

//import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import App from './components/App';

//import React Router Dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}/>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
   
)

render(router, document.getElementById('root'));