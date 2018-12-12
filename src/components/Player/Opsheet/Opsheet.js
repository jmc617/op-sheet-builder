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
  };

  collapseSheet = () => {
    if (this.state.collapsed === true){
      this.setState({
        collapsed: false,
      })
    } else {
      this.setState({
        collapsed: true,
      })
    }

    console.log('Button clicked');

  };
    
    render() {
      return (
        <div className="opsheet-wrapper">
          <h3>Op sheet</h3>
          <button className='collapse-toggle' onClick={this.collapseSheet}>+/-</button>
          
          <ListType />
          <List /> 
        </div>
      );
    }
  }

export default Opsheet;