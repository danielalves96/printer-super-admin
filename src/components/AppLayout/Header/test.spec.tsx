import { render, screen } from '@testing-library/react';
import React from 'react';

import { DarkModeContext } from '@/contexts/DarkModeContext';

import AppHeader from '.';

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

describe('AppHeader component', () => {
  it('renders the header with correct text and styles', () => {
    render(
      <DarkModeContext.Provider
        value={{ darkMode: false, toggleDarkMode: () => {} }}
      >
        <AppHeader />
      </DarkModeContext.Provider>,
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    expect(headerElement).toHaveClass('bg-base_light');
  });
});
