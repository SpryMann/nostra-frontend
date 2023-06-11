import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import { render, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';

import { App, WrappedApp } from '.';

describe('App', () => {
  it('Renders hello world', async () => {
    render(<WrappedApp />);
    await waitFor(() =>
      expect(
        screen.getByRole('heading', {
          level: 1,
        })
      ).toHaveTextContent('Hello World')
    );
  });

  it('Renders home component if home path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
