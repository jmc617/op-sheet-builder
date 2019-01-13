import React, { Component } from 'react';
import ProximitySearch from './ProximitySearch';
import Filters from './Filters';
import HabitatList from './HabitatList';
import Text from './Text';

class Information extends Component {
    render() {

      return (
        <div className="information-wrapper">

          <Text />
          <Filters />
          <ProximitySearch />
          <HabitatList  />

        </div>
      );
    }
  }
 
export default Information;