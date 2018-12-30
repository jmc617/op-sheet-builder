import React, { Component } from 'react';

class Text extends Component {
    render() {
      const data = [{
        //from players.json
        nick: 'Silma',
        points: 300,
        rank: 4000,
        onVacation: false,
        underAttackProtection: false,
        //to search for Alliance name + create link
        allianceID: 300,
      }]

      return (
        <div className='text-wrapper'>
            <h3>Player Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolor recusandae optio alias et sed sit quos asperiores ullam esse adipisci minus laboriosam, enim nisi, vero cupiditate minima, necessitatibus aperiam.</p>

        </div>
      );
    }
  }
 
export default Text;