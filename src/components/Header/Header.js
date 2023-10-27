import { NavLink } from 'react-router-dom';
import { globalContext } from '../../contexts/globalContext';
import { useContext } from 'react';
import logo from '../../images/logo.gif';

export const Header = () => {
  const { user, resetCharacters } = useContext(globalContext);

  function toggleDropdown() {
    const element = document.getElementById('myTopnav');

    if (element.className === 'topnav') {
      element.className += ' responsive';
    } else {
      element.className = 'topnav';
    }
  }

  function onResponsiveMenuClick() {
    const element = document.getElementById('myTopnav');

    if (element.className !== 'topnav') {
      element.className = 'topnav';
    }
  }

  function onLogoutHandler() {
    onResponsiveMenuClick();
  }

  async function onCatalogClickHandler() {
    onResponsiveMenuClick();
    await resetCharacters();
  }

  return (
    <div className="nav">
      <div className="topnav" id="myTopnav">
        <NavLink
          to="/"
          // className={({ isActive }) => (isActive ? 'active' : '')}
          id="firstNavChild"
          onClick={onResponsiveMenuClick}>
          <img src={logo} alt="" />
        </NavLink>

        <NavLink
          to="/catalog?search=&page=1"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={onCatalogClickHandler}>
          Catalog
        </NavLink>
        {user ? (
          <>
            <NavLink to="/create" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
              Create
            </NavLink>

            <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
              News
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
              About
            </NavLink>

            <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onLogoutHandler}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
              About
            </NavLink>

            <NavLink to="/auth" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
              Login / Register
            </NavLink>
          </>
        )}

        <NavLink style={{ fontSize: '15px' }} className="icon" onClick={toggleDropdown}>
          &#9776;
        </NavLink>

        {/* Dropdown if i need it... */}
        {/* <div className="dropdown">
          <button className="dropbtn">
            Dropdown
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to={'/test'}>test</NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
};
