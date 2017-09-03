import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import { NoMatch } from './404';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
