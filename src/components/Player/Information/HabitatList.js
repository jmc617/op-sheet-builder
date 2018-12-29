import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class HabitatList extends Component  {

  render() {
    const data = [{
      name: 'Castle 1',
      points: 34,
    }, {
      name: 'Castle 2',
      points: 26,
    }, {
      name: 'Castle 3',
      points: 13,
    }, {
      name: 'Castle 4',
      points: 12,
    }]

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Points',
      accessor: 'points',
    }]

    return (
      <div className = 'habitat-list-wrapper'>
        <ReactTable
          data={data}
          columns={columns}
          minRows= {1}
          filterable= {false}
          pageSizeOptions= {[5, 10, 20]}
          defaultPageSize= {10}
        />
      </div>
    );
  }
}
 
export default HabitatList;