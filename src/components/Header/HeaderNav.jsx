import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../../store/AuthContext';
import IconUI from './../UI/IconUI';
import css from './HeaderNav.module.css';

const HeaderNav = () => {
  const { authData, isLoggedIn, logout, login } = useAuthContext();

  return (
    <div className='container'>
      <div className={css.navContainer}>
        <img
          src='https://www.radiustheme.com/demo/wordpress/themes/classilist/wp-content/themes/classilist/assets/img/logo-dark.png'
          alt='logo'
        />
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
          {!isLoggedIn && (
            <NavLink className={css.navLink} to='/register'>
              Register
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink className={css.navLink} to='/login'>
              Login
            </NavLink>
          )}
        </nav>
        <nav className={css.findWrapper}>
          {isLoggedIn && (
            <Link
              className={css.navLink}
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              LOGOUT ({authData.username})
            </Link>
          )}
          {/* <IconUI icon='fa-search' white /> */}
        </nav>
        <button className='fa fa-plus' white>
          Post Your Ad
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
