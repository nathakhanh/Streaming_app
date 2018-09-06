import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Stream from './component/Stream';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/stream" component={Stream} />
        </Switch>

      </BrowserRouter>
    );
  }

}

export default App;
