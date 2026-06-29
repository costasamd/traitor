/* 
 The game board component displays the current round, the name of the event, and the list of players in the game. 
 It receives the current round number and the list of players from the player list component, it also receives the event name from the constant file.
 */

import PlayerList from './playerList';
import {Event_Labels} from '../constants';

function GameBoard({ round, currentEvent, players }) {

const event = Event_Labels;

    const currentEventText = event[currentEvent]

   

    return (
        <div>
            <h3>Round: {round}</h3>
            <h3>Event: {currentEventText}</h3>
            <PlayerList players={players} />
        </div>
        
        
    );
};

export default GameBoard;