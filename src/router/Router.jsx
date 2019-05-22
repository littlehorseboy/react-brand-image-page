import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={Home} />
          <Route path='/hello/:userName' component={Home} />
          <Route path='/hey/:userName' render={props => <h1>Hey! {props.match.params.userName}</h1>} />
        </>
      </HashRouter>
    );
  }
}

export default Router;
