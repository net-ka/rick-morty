import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Characters from './pages/characters';
import Hero from './pages/hero';
import Home from './pages/index';
import Layout from './pages/layout';
import Error from './pages/error';

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path='/'component={Home} /> 
                <Route path='/hero'component={Hero} /> 
                <Route path='/characters'component={Characters} /> 
                <Route path='/layout'component={Layout} />
                <Route path='*'component={Error} />
          </Switch>
        </App>
    </Router>), 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
