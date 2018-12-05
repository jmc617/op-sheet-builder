import React, { Component } from 'react';
import ProximitySearch from './ProximitySearch';
import Filters from './Filters';
import HabitatList from './HabitatList';

class Information extends Component {
    render() {
      return (
        <div className="">
          <h3>Player Name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolor recusandae optio alias et sed sit quos asperiores ullam esse adipisci minus laboriosam, enim nisi, vero cupiditate minima, necessitatibus aperiam.</p>
          <Filters />
          <ProximitySearch />
          <HabitatList />

        </div>
      );
    }
  }
 
export default Information;