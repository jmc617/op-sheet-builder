import React, { Component } from 'react';
import List from './List';
import ListType from './ListType';

class Opsheet extends Component {
  state = { 
    collapsed: true, 
    listClassName: 'list-wrapper-collapsed',
  };

  checkIfCollapsed = () => {
    if (this.state.collapsed === true) {
      return true
    } else {
      return false
    }
  }

  listClassNameChange = () => {
    if (this.checkIfCollapsed() === true) {
      this.setState({listClassName: 'list-wrapper'})
    } else {
      this.setState({listClassName: 'list-wrapper-collapsed'})
    }
}

  toggleSheetCollapseExpand = () => {
    this.setState({collapsed: !this.state.collapsed})
    this.listClassNameChange();

    console.log('Current state='+ this.state.collapsed);
    console.log(this.state.listClassName);


  };
   
    render(){
      
      const { listClassName } = this.state;

      return (
        <div className="opsheet-wrapper">
          <h3>Op sheet</h3>
          <button className='collapse-toggle' onClick={this.toggleSheetCollapseExpand}>+/-</button>
          
          <ListType />
          <List listClassName={listClassName}/> 

        </div>
      );
    }
  }

export default Opsheet;



