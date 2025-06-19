import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders Vite link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /vite/i })).toBeInTheDocument();
  });
});
