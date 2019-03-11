import React, { Component } from 'react';
import Routes from './routes';

// redux additions
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// example action import from tutorial
// import { exampleAction } from '../../actions/actions.js'


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

const mapStateToProps = (state) => {
  return {
    // examplePropOne: state.examplePropOne,
    // examplePropTwo: state.examplePropTwo,
  }
}

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({ exampleAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
