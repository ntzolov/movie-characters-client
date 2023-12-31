import logos from '../../images/logos.png';

export const About = () => {
  return (
    <>
      <div className='container-about' data-testid='about-container'>
        <div className='container-title-text'>
          <div className='title'>Used technologies:</div>
          <div className='text'>HTML, SASS, Express, React, Jest</div>
        </div>
        <div className='container-title-text'>
          <div className='title'>Contact me:</div>
          <div className='text'>
            <a href='https://ntzolov.com' target='blank'>
              My personal website
            </a>
            ,&nbsp;
            <a href='https://github.com/ntzolov' target='blank'>
              My GitHub
            </a>
            ,&nbsp;
            <a href='https://t.me/ntzolov' target='blank'>My Telegram</a>
          </div>
        </div>
        <img src={logos} alt='superheroes logos' />
        <div className='container-title-text'>
          <div className='title'>Note:</div>
          <div className='text'>
            This page is created as a part of{' '}
            <a href='https://softuni.bg' target='blank'>
              SoftUni
            </a>{' '}
            student program final (React) exam. Thank you for collaborate! You can give me a star in GitHub in case you like it!
          </div>
        </div>
      </div>
    </>
  );
};
