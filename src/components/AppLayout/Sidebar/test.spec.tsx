import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { DarkModeContext } from '@/contexts/DarkModeContext';
import { SidebarProvider } from '@/contexts/SidebarContext';

import Sidebar from '.';

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

describe('Sidebar component', () => {
  it('renders the sidebar with correct logo and styles', () => {
    render(
      <MemoryRouter>
        <DarkModeContext.Provider
          value={{ darkMode: false, toggleDarkMode: () => {} }}
        >
          <SidebarProvider>
            <Sidebar />
          </SidebarProvider>
        </DarkModeContext.Provider>
      </MemoryRouter>,
    );

    const sidebarElement = screen.getByTestId('sidebar');
    expect(sidebarElement).toBeInTheDocument();
  });
});
