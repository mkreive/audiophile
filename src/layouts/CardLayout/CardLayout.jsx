import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './card-layout.module.scss';

const cn = classNames.bind(styles);

export default function CardLayout({ children }) {
  return <div className={cn('container')}>{children}</div>;
}

CardLayout.propTypes = {
  children: PropTypes.node,
};
