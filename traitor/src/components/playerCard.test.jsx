import { render, screen } from "@testing-library/react";
import PlayerCard from "./playerCard";
import { expect, test } from "vitest";

test('show player name', () => {
    render(<PlayerCard name='Anna' status='Alive' />);
    expect(screen.getByText('Anna')).toBeInTheDocument();
});

test('player status alive when player is still alive', () => {
    render(<PlayerCard name='Anna' status='alive' />);
    expect(screen.getByText('Alive')).toBeInTheDocument();
});

test('player status dead when player is dead', () => {
    render(<PlayerCard name='Carlos' status='dead' />);
    expect(screen.getByText('Eliminated')).toBeInTheDocument();
});

test('player status offline when player is offline', () => {
    render(<PlayerCard name='Andre' status='offline' />);
    expect(screen.getByText('Disconnected')).toBeInTheDocument();
});

test('player points to show how many points the player has', () => {
    render(<PlayerCard name='Andre' status='alive' points={50} />);
    expect(screen.getByText('50')).toBeInTheDocument();
});

test('player points to show 0 points when player has no points', () => {
    render(<PlayerCard name='Andre' status='alive' />);
    expect(screen.getByText('0')).toBeInTheDocument();
});