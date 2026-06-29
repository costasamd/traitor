/*

This function is a display component that takes in a name, status and points of each player and show them in a card format.
It import the status from the constant file, the name and points from player list component.

*/
import {Player_Status} from '../constants';

//have a default value for status and points for the start of the game, and in case nothing is passed down from the player list component.
function PlayerCard({ name, status='alive', points=0}) { 

    const playerStatus = Player_Status;

    const displayStatus = playerStatus[status];

    
    return (<div>
        <h2>{name}</h2>
        <h2>{displayStatus}</h2>
        <p>{points}</p>
    </div>)
}

export default PlayerCard;