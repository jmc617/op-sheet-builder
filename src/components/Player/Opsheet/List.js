import React, { Component } from 'react';

class List extends Component {
    render() {
      return (
        <div className='list-wrapper'>
          <h3>Op List</h3>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
        </div>
      );
    }
  }



export default List;