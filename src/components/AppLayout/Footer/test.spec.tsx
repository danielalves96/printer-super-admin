import { render, screen } from '@testing-library/react';
import React from 'react';

import { DarkModeContext } from '@/contexts/DarkModeContext';

import AppFooter from '.';

describe('AppFooter component', () => {
  it('renders the footer with correct text and styles', () => {
    render(
      <DarkModeContext.Provider
        value={{ darkMode: false, toggleDarkMode: () => {} }}
      >
        <AppFooter />
      </DarkModeContext.Provider>,
    );

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();

    expect(footerElement).toHaveClass('bg-base_light');
  });
});
