import {render, screen, fireEvent} from '@testing-library/react';
import {expect, test} from 'vitest';
import GameControl from './gameControl';

test('the game starts in the round 0', () => {
    render(<GameControl/>);
    expect(screen.getByText('Round: 0')).toBeInTheDocument();
})

test('the game starts in lobby phase', () => {
    render (<GameControl/>);
    expect(screen.getByText('Lobby')).toBeInTheDocument();
})

test ('the Host can start the game and the game progress to the next round', () => {
    render (<GameControl/>);
    const startBtn = screen.getByRole('button', {name: 'Start Game'});
    fireEvent.click(startBtn);
    expect(screen.getByText('Round: 1')).toBeInTheDocument();
})

test ('the host can start the game and the phase move from lobby to the next phase', () => {
    render (<GameControl/>);
    const startBtn = screen.getByText('Start Game');
    fireEvent.click(startBtn);
    expect(screen.getByText('Playing')).toBeInTheDocument();
})