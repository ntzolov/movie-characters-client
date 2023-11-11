import { render, screen } from '@testing-library/react';
import { Create } from './Create';
import { GlobalContextProvider } from '../../contexts/globalContext';
import { BrowserRouter } from 'react-router-dom';

describe('Create component tests', function () {
  it('contain seven input fields', () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <Create />
        </GlobalContextProvider>
      </BrowserRouter>
    );

    const inputs = screen.getAllByRole('textbox');

    expect(inputs).toHaveLength(7);
  });
  it('contain correct heading', () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <Create />
        </GlobalContextProvider>
      </BrowserRouter>
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Create character');
  });
});
