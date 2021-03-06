import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Details from './components/Details';
import Info from './components/Info';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />

          <Switch>
            <Route exact path="/" component={Details} />
            <Route exact path="/info/:id" component={Info} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
