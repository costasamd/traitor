//create a list of players, displaying id, name, status and points. this display will be updated in real time as the game progresses.

import PlayerCard from "./playerCard";

function PlayerList({ players = [] }) {

    return (
        <div>
            {players.map(player => (
                <PlayerCard key={player.id} name={player.name} status={player.status} points={player.points} />
            ))}
        </div>
    )
};

export default PlayerList;