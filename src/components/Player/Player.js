import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Information from './Information/Information';
import Opsheet from './Opsheet/Opsheet';
import Search from './Search/Search';


class Player extends Component {
    render() {
      return (
        <div className="wrapper">
            <div>
                <Link to="/counter">To the Counter</Link>
                <Link to="/form">To the Increment form</Link>
                {/* player */}
                <Link to='/player'> Player </Link>
            </div>
            <Search />
            <Information />
            <Opsheet />
        </div>
      );
    }
  }
 
export default Player;