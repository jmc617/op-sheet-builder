import React, { Component } from 'react';

class ProximitySearch extends Component {
    render() {
      return (
        <div>
            <h3>Proximity Search</h3>
            <p>Find all Habs owned by player within __ fields</p>
            <input type="text"/>
            <input type="button" value="Search"/>
        </div>
      );
    }
  }
 
export default ProximitySearch;