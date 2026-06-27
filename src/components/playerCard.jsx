import {Player_Status} from '../constants';

function PlayerCard({ name, status='alive', points=0}) {
 
/*
    const playerStatus = {
        alive: 'Alive',
        dead: 'Eliminated',
        offline: 'Disconnected'
    }
*/

    const playerStatus = Player_Status;

    const displayStatus = playerStatus[status];

    
    return (<div>
        <h2>{name}</h2>
        <h2>{displayStatus}</h2>
        <p>{points}</p>
    </div>)
}

export default PlayerCard;