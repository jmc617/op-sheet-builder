import React, { Component } from 'react';
import gameData from './data.json';

class Text extends Component {
    render() {

      const { nick, points, rank, onVacation, underAttackProtection} = gameData;

      const vacationStatusText = () => { return (onVacation ? "Yes" : "No")};
      const protectionStatusText = () => { return (underAttackProtection ? "Yes" : "No")};
      

      return (
        
        <div className='text-wrapper'>
            <h3>{nick}</h3>
            <p>Points:{points}</p>
            <p>Rank:{rank}</p>
            <p>On vacation? {vacationStatusText()}</p>
            <p>New player protection? {protectionStatusText()}</p>

            

        </div>
      );
    }
  }
 
export default Text;