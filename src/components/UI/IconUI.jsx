import css from './IconUI.module.css'

function IconUI({ icon, white, yellow, green, className }) {
  const iconColor = () => {
    if (yellow) return css.yellow;
    if (green) return css.green;
    return css.white;
  };
  return (
    <span className={iconColor() + (!className ? '' : ` ${className}`)}>
      <i className={`fa ${icon}`} aria-hidden='true'></i>
    </span>
  );
}

export default IconUI;
