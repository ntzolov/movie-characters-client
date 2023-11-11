import { render, screen } from '@testing-library/react';
import { Catalog } from './Catalog';
import { GlobalContextProvider } from '../../contexts/globalContext';
import { BrowserRouter } from 'react-router-dom';

describe('About component tests', function () {
  it('test', async () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <Catalog />
        </GlobalContextProvider>
      </BrowserRouter>
    );

    const container = await screen.findByTestId('characters-container');

    expect(container).toHaveClass('container-catalog');
  });
});
