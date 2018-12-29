import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Information from './Information/Information';
import Opsheet from './Opsheet/Opsheet';
import Search from './Search/Search';


class Player extends Component {
    render() {
      return (
        <div className="wrapper">
            <div className='nav'>
                <Link to='/'> Home </Link>
            </div>
            <Search />
            <Information />
            <Opsheet />
        </div>
      );
    }
  }
 
export default Player;