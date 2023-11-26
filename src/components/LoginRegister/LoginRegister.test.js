import { render, screen, fireEvent } from '@testing-library/react';
import { LoginRegister } from './LoginRegister';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../../contexts/globalContext';

it('switches to register form when "Register" is clicked', () => {
  render(
    <BrowserRouter>
      <GlobalContextProvider>
        <LoginRegister />
      </GlobalContextProvider>
    </BrowserRouter>
  );

  fireEvent.click(screen.getByLabelText('Register'));
});

it('switches to login form when "Login" is clicked', () => {
  render(
    <BrowserRouter>
      <GlobalContextProvider>
        <LoginRegister />
      </GlobalContextProvider>
    </BrowserRouter>
  );

  fireEvent.click(screen.getByLabelText('Login'));
});
