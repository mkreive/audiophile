import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './mobile-navigation.module.scss';

const cn = classNames.bind(styles);

export default function MobileNavigation(props) {
  const handleMenuClick = (e) => props.onChange(e.target);

  return (
    <nav className={cn('container')}>
      <input id='menu-toggle' type='checkbox' onChange={handleMenuClick} checked={props.checked} />
      <label htmlFor='menu-toggle' className={cn('menu-button-container')}>
        <div className={cn('menu-button')}></div>
      </label>
    </nav>
  );
}

MobileNavigation.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};
