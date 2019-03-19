import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddToOpsheetButton from './AddToOpsheetButton';

class HabitatList extends Component  {

  render() {


    const playerData = [{
      //from player.json to search for habData
      habitatIDs: [12,34,67,78]
    }]

    const habData = [{
      //from habitat.json
      name: 'Castle 1',
      points: 34,
    }, {
      name: 'Fort 2',
      points: 26,
    }, {
      name: 'Castle 3',
      points: 13,
    }, {
      name: 'Fort 4',
      points: 12,
    }]

    const columns = [{
      Header: 'Name',
      accessor: 'name' 
    }, {
      Header: 'Points',
      accessor: 'points',
    }, {
      Header: 'add to oplist',
      accessor: 'name',
      Cell: <AddToOpsheetButton/>,
      
    }]

    return (
      <div className = 'habitat-list-wrapper'>
        <ReactTable
          data={habData}
          noDataText="Player not found!"
          columns={columns}
          minRows= {1}
          pageSizeOptions= {[5, 10, 20]}
          defaultPageSize= {10}
        />
      </div>
    );
  }
}
 
export default HabitatList;
