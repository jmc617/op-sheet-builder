import React, { Component } from 'react';

class Text extends Component {
    render() {
      const data = {
        //from players.json
        nick: 'Silma',
        points: 300,
        rank: 4000,
        onVacation: true,
        underAttackProtection: false,
        //to search for Alliance name + create link
        allianceID: 300,     
      }

      const { nick, points, rank, onVacation, underAttackProtection} = data;

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