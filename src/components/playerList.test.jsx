import { render, screen } from '@testing-library/react';
import PlayerList from './playerList';
import { expect, test } from 'vitest';

test('player list shows all players', () => {
    render(<PlayerList players={[
        { id: 1,name: 'Anna', status: 'alive', points: 50 },
        { id: 2,name: 'Carlos', status: 'dead', points: 0 },
        { id: 3,name: 'Andre', status: 'offline', points: 20 }
    ]} />);
    
    expect(screen.getByText('Anna')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
    expect(screen.getByText(50)).toBeInTheDocument();
    expect(screen.getByText('Carlos')).toBeInTheDocument();
    expect(screen.getByText('Eliminated')).toBeInTheDocument();
    expect(screen.getByText(0)).toBeInTheDocument();
    expect(screen.getByText('Andre')).toBeInTheDocument();
    expect(screen.getByText('Disconnected')).toBeInTheDocument();
    expect(screen.getByText(20)).toBeInTheDocument();
});