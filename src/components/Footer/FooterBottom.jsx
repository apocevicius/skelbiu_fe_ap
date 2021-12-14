import css from './FooterBottom.module.css';

function FooterBottom() {
  return (
    <section className={css.container}>
      <div className={css.copyright}>
        © Copyright Skelbiu. Designed and Developed by
        <a href=' https://www.radiustheme.com/'> Radius Theme</a>
      </div>
    </section>
  );
}

export default FooterBottom;
