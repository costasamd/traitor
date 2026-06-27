import PlayerList from './playerList';
import {Event_Labels} from '../constants';

function GameBoard({ round, currentEvent, players }) {

/*
    const currentEventLabels = {
        quietNight: 'Quiet Night',
        murder: 'Murder',
        banishment: 'Banishment Vote',
        fBanishment: 'Final Banishment Vote'
    };
*/

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