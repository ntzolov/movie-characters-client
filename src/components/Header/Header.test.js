import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../../contexts/globalContext';

describe('Footer component tests', function () {
  it('contains 3 or more links', () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <Header />
        </GlobalContextProvider>
      </BrowserRouter>
    );

    const links = screen.getAllByRole('link');

    expect(links.length).toBeGreaterThanOrEqual(3);
  });
});
