import HeaderContacts from './HeaderContacts';
import HeaderNav from './HeaderNav';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <HeaderContacts />
      <HeaderNav />
    </header>
  );
};

export default Header;
