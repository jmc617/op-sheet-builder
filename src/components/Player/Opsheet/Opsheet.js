import React, { Component } from 'react';
import List from './List';
import ListType from './ListType';

//function to convert to react
// function collapseToggle () {
//   let collapsed = true;
//   const toggle = document.getElementsByClassName('collapse-toggle')
//   const opsheetContent = document.getElementsByClassName('list-wrapper')
  
//   toggle[0].addEventListener('click', function() {
//     if (collapsed === true) {
//       opsheetContent[0].style.display = 'block';
//       collapsed = false
//     } else {
//       opsheetContent[0].style.display = 'none';
//       collapsed = true
//     }
//   })
// }

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

      return (
        <div className="opsheet-wrapper">
          <h3>Op sheet</h3>
          <button className='collapse-toggle' onClick={this.toggleSheetCollapseExpand}>+/-</button>
          
          <ListType />
          <List listClassName={this.state.listClassName}/> 

        </div>
      );
    }
  }

export default Opsheet;



