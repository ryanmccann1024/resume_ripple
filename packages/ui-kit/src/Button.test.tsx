import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
function Button() {
  return <button>Click me</button>;
}

describe('Button', () => {
  it('renders', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveTextContent(/click/i);
  });
});
