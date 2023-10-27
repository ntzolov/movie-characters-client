import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';
import homeVideo from '../../videos/home-video.mp4';
import { HomeUser } from './HomeUser';
import { HomeGuest } from './HomeGuest';

export const Home = () => {
  const { user } = useContext(globalContext);

  return (
    <div className='container-home'>
      <div className='home-video'>
        <video
          id='background-video'
          autoPlay
          loop
          muted
          style={{ pointerEvents: 'none' }}>
          <source
            src={homeVideo}
            type='video/mp4'
          />
        </video>
      </div>
      <div className='home-content'>{user ? <HomeUser /> : <HomeGuest />}</div>
    </div>
  );
};
