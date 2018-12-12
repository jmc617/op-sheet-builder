import React, { Component } from 'react';
import List from './List'
import Toggle from './Toggle'

class Opsheet extends Component {
    render() {
      return (
        <div className="opsheet-wrapper">
          <h3>Op sheet</h3>
          <Toggle />
          <List /> 
        </div>
      );
    }
  }
 
export default Opsheet;