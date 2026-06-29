import {useState} from 'react';
import {Phase_Labels, Event_Labels} from '../constants.js';


function GameControl () {

    const phaseLabels = Phase_Labels;

    const [round, setRound] = useState(0);
    const [phase, setPhase] = useState('lobby');
    const [currentEvent, setCurrentEvent] = useState(null);

    const nextRound = () => {
        setRound(round + 1);
    }

    const nextPhase = (newPhase) => {
        setPhase(newPhase);
    }

    const triggerEvent = (selectEvent) => {
        setCurrentEvent(selectEvent);
    }
    
    return(
        <div>
            <h2>Round: {round}</h2>
            <p>{phaseLabels[phase]}</p>
            
            {/* conditional rendering of the buttons of the game control based on the phase of the game */}
            
            {phase === 'lobby' && (
                <button onClick={() => { nextRound(); nextPhase('inGame'); }}>Start Game</button>
            )}

            {phase === 'inGame' && (
                <div>
                <button onClick={() => { triggerEvent('murder'); }}>Murder Event</button>
                <button onClick={() => { triggerEvent('quietNight'); }}>Quiet Night Event</button>
                <button onClick={() => { triggerEvent('banishment'); }}>Banishment Event</button>
                <button onClick={() => { triggerEvent('fBanishment');}}>Final Banishment Event</button>
                </div>
            )}



        </div>
    )
} 


export default GameControl;
