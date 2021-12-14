import IconUI from './../UI/IconUI';
import classes from './HeaderContacts.module.css';

function HeaderContacts() {
  return (
    <div className={classes.HeaderContacts}>
      <div className='container'>
        <div className={classes.ContactUsContainer}>
          <IconUI icon='fa fa-phone' className={classes.PhoneIcon} yellow />
          <span>+6143454572</span>
          <IconUI icon='fa fa-envelope-o' className={classes.MailIcon} yellow />
          <span>info@example.com</span>
        </div>
        <div className={classes.ContactsIconsContainer}>
          <IconUI icon='fa fa-facebook' />
          <IconUI icon='fa fa-twitter' />
          <IconUI icon='fa fa-google-plus' />
          <IconUI icon='fa fa-linkedin' />
          <IconUI icon='fa fa-rss' />
        </div>
      </div>
    </div>
  );
}

export default HeaderContacts;
