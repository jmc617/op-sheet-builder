import React, { Component } from 'react';

class ProximitySearch extends Component {
    render() {
      return (
        <div className='proximity-search-wrapper'>
            <h3>Proximity Search</h3>
            <p>Find all Habs owned by player within __ fields</p>
            <input className='proximity-input' type="text"/>
            <input type="button" value="Search"/>
        </div>
      );
    }
  }
 
export default ProximitySearch;