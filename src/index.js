import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter, HashRouter, Link, NavLink } from 'react-router-dom';

import './index.css';

import * as serviceWorker from './serviceWorker';

import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';
import Demo3 from './pages/Demo3-immutable';

import NotFound from './pages/NotFound';


export default class App extends Component {
  render() {
    return (
      <HashRouter path="/">
        <div className="nav_list">
          <NavLink to="/demo1" className="nav">demo1</NavLink>
          <NavLink to="/demo2" className="nav">demo2</NavLink>
          <NavLink to="/demo3" className="nav">demo3</NavLink>
        </div>

        <Switch>
          <Route exact path="/" component={Demo1} />
          <Route path="/demo1" component={Demo1} />
          <Route path="/demo2" component={Demo2} />
          <Route path="/demo3" component={Demo3} />
          <Route component={NotFound} />
        </Switch>

      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
