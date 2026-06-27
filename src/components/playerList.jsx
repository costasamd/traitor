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