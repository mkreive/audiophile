import classNames from 'classnames/bind';
import styles from './button.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Button({ children, onClick, theme, type = 'button' }) {
  return (
    <button onClick={onClick} type={type} className={cn('btn', theme)}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  theme: PropTypes.string,
};
