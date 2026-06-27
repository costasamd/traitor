//object for game phases in the game. It is used in the game control and game board

export const Phase_Labels = {
    'lobby': 'Lobby',
    'inGame': 'Playing Phase',
    'vote': 'Voting Phase',
    'reveal': 'Reveal Phase',
    'gameOver': 'Game Over'
};

//object for game events in the game. It is used in the game control and game board

export const Event_Labels = {
    quietNight: 'Quiet Night',
    murder: 'Murder',
    banishment: 'Banishment',
    fBanishment: 'Final Banishment'
};

//object for player status in the game. It is used in the player list, player card and game board

export const Player_Status = {
    alive: 'Alive',
    dead: 'Eliminated',
    offline: 'Disconnected'
};