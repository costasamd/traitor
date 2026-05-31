import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import PlayerList from './playerList';
import GameBoard from './gameBoard';

test('game board renders round number', () => {
    render(<GameBoard round={1} />);
    expect(screen.getByText('Round: 1')).toBeInTheDocument();
});

test('game board display the current event', () => { 
    render(<GameBoard currentEvent={'quietNight'} />);
    expect(screen.getByText('Event: Quiet Night')).toBeInTheDocument();
});

test('game board displays murder event', () => {
    render(<GameBoard currentEvent={'murder'} />);
    expect(screen.getByText('Event: Murder')).toBeInTheDocument();
});

test('game board displays banishment event', () => {
    render(<GameBoard currentEvent={'banishment'} />);
    expect(screen.getByText('Event: Banishment Vote')).toBeInTheDocument();
});

test('game board displays final banishment event', () => {
    render(<GameBoard currentEvent={'fBanishment'} />);
    expect(screen.getByText('Event: Final Banishment Vote')).toBeInTheDocument();
});

test('game board display a list of all players and their statuses in the game', () => {
    render(<GameBoard players={[
        { id: 1, name: 'Anna', status: 'alive', points: 30 },
        { id: 2, name: 'Bob', status: 'alive', points: 25 },
        { id: 3, name: 'Charlie', status: 'dead', points: 20 },
        { id: 4, name: 'David', status: 'alive', points: 15 },
        { id: 5, name: 'Eve', status: 'dead', points: 10 },
        { id: 6, name: 'Frank', status: 'offline', points: 5 }
    ]} />);
    
    expect(screen.getByText('Anna')).toBeInTheDocument();
    expect(screen.getAllByText('Alive')).toHaveLength(3);
    expect(screen.getByText(30)).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getAllByText('Alive')).toHaveLength(3);
    expect(screen.getByText(25)).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
    expect(screen.getAllByText('Eliminated')).toHaveLength(2);
    expect(screen.getByText(20)).toBeInTheDocument();
    expect(screen.getByText('David')).toBeInTheDocument();
    expect(screen.getAllByText('Alive')).toHaveLength(3);
    expect(screen.getByText(15)).toBeInTheDocument();
    expect(screen.getByText('Eve')).toBeInTheDocument();
    expect(screen.getAllByText('Eliminated')).toHaveLength(2);
    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText('Frank')).toBeInTheDocument();
    expect(screen.getByText('Disconnected')).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();

});