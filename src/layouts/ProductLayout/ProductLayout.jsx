import classNames from 'classnames/bind';
import styles from './product-layout.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function ProductLayout({ children }) {
  return <div className={cn('container')}>{children}</div>;
}

ProductLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
