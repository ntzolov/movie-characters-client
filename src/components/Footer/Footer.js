import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <span>
          All rights reserved &#169; - <Link target='blank' to={'https://github.com/ntzolov/movie-characters-client'}>Give me a &#9733; &#9786;</Link>
        </span>
      </div>
    </footer>
  );
};
