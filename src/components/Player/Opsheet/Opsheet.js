import React, { Component } from 'react';
import List from './List';
import ListType from './ListType';

const EXPANDED_LIST_CLASSNAME = 'list-wrapper';
const COLLAPSED_LIST_CLASSNAME = 'list-wrapper-collapsed';

class Opsheet extends Component {

  state = { 
    collapsed: true, 
    listClassName: COLLAPSED_LIST_CLASSNAME,
  };

  changeListClassName = () => {
    const { collapsed } = this.state;
    const listClassName = (collapsed) ? EXPANDED_LIST_CLASSNAME : COLLAPSED_LIST_CLASSNAME;
    this.setState({listClassName});
  };

  toggleSheetCollapseExpand = () => {
    this.setState({collapsed: !this.state.collapsed})
    this.changeListClassName();
  };

  
   
    render(){
      
      const { listClassName } = this.state;
      const { opSheetItems} = this.props;
      

      console.log(opSheetItems)

      return (
        <div className="opsheet-wrapper">
          <h3>Op sheet</h3>
          <button className='collapse-toggle' onClick={this.toggleSheetCollapseExpand}>+/-</button>
          
          <ListType />
          <List 
            listClassName={listClassName}
            opSheetItems={opSheetItems}
          /> 

        </div>
      );
    }
  }

export default Opsheet;



