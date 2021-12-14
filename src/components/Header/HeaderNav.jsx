import { Link, NavLink } from 'react-router-dom';
import IconUI from './../UI/IconUI';
import css from './HeaderNav.module.css';

const HeaderNav = () => {
  return (
    <div className='container'>
      <div className={css.navContainer}>
        <h2>Skelbiu.lt</h2>
        <nav className={css.links + ' mainNav'}>
          <NavLink className={css.navLink} exact to='/'>
            Home <IconUI icon='fa-angle-down' white />
          </NavLink>
          <NavLink className={css.navLink} exact to='/ads'>
            All Ads <IconUI icon='fa-angle-down' white />
          </NavLink>
          <NavLink className={css.navLink} exact to='/pages'>
            Pages <IconUI icon='fa-angle-down' white />
          </NavLink>
          <NavLink className={css.navLink} exact to='/blog'>
            Blog <IconUI icon='fa-angle-down' white />
          </NavLink>
          <NavLink className={css.navLink} exact to='/contact'>
            Contact
          </NavLink>
          <NavLink className={css.navLink} exact to='/register'>
            Login/Register
          </NavLink>
        </nav>
        <button className='fa fa-plus' white>
          Post Your Ad
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
