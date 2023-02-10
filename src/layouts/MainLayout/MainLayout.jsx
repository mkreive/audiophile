import classNames from 'classnames/bind';
import styles from './main-layout.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function MainLayout({ children }) {
  return <div className={cn('container')}>{children}</div>;
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
