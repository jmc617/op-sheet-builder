import React, { Component } from 'react';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
