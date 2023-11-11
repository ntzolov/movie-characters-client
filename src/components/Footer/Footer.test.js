import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer component tests', function () {
  it('contains text', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const test = screen.getByRole('contentinfo');

    expect(test).toHaveTextContent('All rights reserved');
  });
});
