import {useState} from 'react';
import {Phase_Labels} from '../constants.js';


function GameControl () {

    const phaseLabels = Phase_Labels;

    const [round, setRound] = useState(0);
    const [phase, setPhase] = useState('lobby');

    const nextRound = () => {
        setRound(round + 1);
    }

    const nextPhase = () => {
        setPhase('inGame');
    }
    
    return(
        <div>
            <h2>Round: {round}</h2>
            <p>{phaseLabels[phase]}</p>
            <button onClick={() => { nextRound(); nextPhase(); }}>Start Game</button>
        </div>
    )
} 


export default GameControl;
