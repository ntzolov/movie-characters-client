import { useState } from 'react';
import { useEffect } from 'react';

export const SpinnerNote = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCounter((state) => state + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h3 className='spinner-note'>
      <span style={{ color: 'orange' }}>Note: </span>
      If you have trouble with endless loading, that may happened because of my hosting service. Try
      to wait 60sec. for waking up my service. If still doesn't work please refresh the page!{' '}
      <span style={{ color: 'orange' }}>{counter}</span>sec.
    </h3>
  );
};
