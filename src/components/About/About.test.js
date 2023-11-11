import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About component tests', function () {
  it('is correct object', () => {
    render(<About />);
    const test = screen.getByTestId('about-container');
    expect(test).toBeInstanceOf(HTMLDivElement);
  });
  it('renders correct number of links', () => {
    render(<About />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
  });
});
