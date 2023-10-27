import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';
import { Link } from 'react-router-dom';

export const HomeUser = () => {
  const { user } = useContext(globalContext);
  return (
    <>
      <h1>Hello, @{user.username}!</h1>
      <p>
        Are you <Link to={'/catalog'}>looking</Link> for a character?
      </p>
      <p>
        Or you want to <Link to={'/news'}>read</Link> some fresh stories in the industry?...
      </p>
    </>
  );
};
