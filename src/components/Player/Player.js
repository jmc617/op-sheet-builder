import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Information from './Information/Information';
import Opsheet from './Opsheet/Opsheet';
import Search from './Search/Search';


class Player extends Component {
  state = { 
    opSheetItems: [], 
  };

  addItemToOpsheet = (name) => {
    return () => {
      this.setState(state => {
        const opSheetItems = state.opSheetItems.concat(name)
        console.log(opSheetItems);
        return opSheetItems
      });
    }
  }

  render() {

    const { opSheetItems } = this.state;

    
    return (
      <div className="wrapper">
          <div className='nav'>
              <Link to='/'> Home </Link>
              <div onClick={this.addItemToOpsheet('test')}>add</div>
          </div>
          <Search />
          <Information />
          <Opsheet opSheetItems={opSheetItems}/>
      </div>
    );
  }
}

export default Player;
