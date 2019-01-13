import React, { Component } from 'react';
import List from './List';
import ListType from './ListType';

class Opsheet extends Component {
  state = { 
    collapsed: true, 
    listClassName: 'list-wrapper-collapsed',
  };

  listClassNameChange = () => { return (this.state.collapsed ? this.setState({listClassName: 'list-wrapper'}) : this.setState({listClassName: 'list-wrapper-collapsed'})) };

  toggleSheetCollapseExpand = () => {
    this.setState({collapsed: !this.state.collapsed})
    this.listClassNameChange();
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



