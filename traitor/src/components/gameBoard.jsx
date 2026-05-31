import PlayerList from './playerList';

function GameBoard({ round, currentEvent, players }) {

    const currentEventLabels = {
        quietNight: 'Quiet Night',
        murder: 'Murder',
        banishment: 'Banishment Vote',
        fBanishment: 'Final Banishment Vote'
    };

    let currentEventText = currentEventLabels[currentEvent]

   

    return (
        <div>
            <h3>Round: {round}</h3>
            <h3>Event: {currentEventText}</h3>
            <PlayerList players={players} />
        </div>
        
        
    );
};

export default GameBoard;