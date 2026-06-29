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

test ('the next phase inGame displays do NOT display the start game button', () => {
    render (<GameControl/>);
    const startBtn = screen.getByText('Start Game');
    fireEvent.click(startBtn);
    expect(screen.queryByText('Start Game')).not.toBeInTheDocument();
})

test ('the inGame phase displays the Murder Event button', () => {
    render (<GameControl/>);
    fireEvent.click(screen.getByText('Start Game'));
    expect(screen.getByText('Murder Event')).toBeInTheDocument();
})

test ('the inGame phase display the Quiet Night event button', () => {
    render (<GameControl/>);
    fireEvent.click(screen.getByText('Start Game'));
    expect(screen.getByText('Quiet Night Event')).toBeInTheDocument();
})

test('the inGame phase displays the Banishment Event button', () => {
    render (<GameControl/>);
    fireEvent.click(screen.getByText('Start Game'));
    expect(screen.getByText('Banishment Event')).toBeInTheDocument();
})

test('the inGame phase displays the Final Banishment Event button', () => {
    render (<GameControl/>);
    fireEvent.click(screen.getByText('Start Game'));
    expect(screen.getByText('Final Banishment Event')).toBeInTheDocument();
})