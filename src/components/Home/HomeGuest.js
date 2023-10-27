import { Link } from 'react-router-dom';

export const HomeGuest = () => {
  return (
    <>
      <h1>Welcome, guest!</h1>
      <p>
        <Link to={'/auth'}>Register/login</Link> now and create your favorite characters! You could like, create favorite list,
        sort and more!
      </p>
      <p>
        If you like my project, please{' '}
        <Link
          to={'https://github.com/ntzolov/movie-characters-website'}
          target='_blank'>
          give
        </Link>{' '}
        me a star :)
      </p>
    </>
  );
};
