import React, { Component } from 'react';

class ListType extends Component {
    render() {
      return (
        <div className='list-types-selection-wrapper'>
            None<input type="checkbox" value='none' name="" id=""/>
            Real Icon<input type="checkbox" value='real' id=""/>
            Fakes Icon<input type="checkbox" value='fakes' id=""/>
        </div>
      );
    }
  }
 
export default ListType;