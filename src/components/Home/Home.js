import { useContext, useEffect } from 'react';
import { globalContext } from '../../contexts/globalContext';
import homeVideo from '../../videos/home-video.mp4';
import { HomeUser } from './HomeUser';
import { HomeGuest } from './HomeGuest';

export const Home = () => {
  const { user } = useContext(globalContext);

  useEffect(() => {
    console.log(
      '%c★★★ Welcome user and have a good time! ★★★',
      'color: lime; font-size: 16px; font-family: sans-serif; text-decoration: underline;'
    );
  }, []);

  return (
    <div className='container-home'>
      <div className='home-video'>
        <video id='background-video' autoPlay loop muted style={{ pointerEvents: 'none' }}>
          <source src={homeVideo} type='video/mp4' />
        </video>
      </div>
      <div className='home-content'>{user ? <HomeUser /> : <HomeGuest />}</div>
    </div>
  );
};
