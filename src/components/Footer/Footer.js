import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <span>
          All rights reserved &#169; - <Link to={'https://github.com/ntzolov'}>Give me a &#9733; &#9786;</Link>
        </span>
      </div>
    </footer>
  );
};
