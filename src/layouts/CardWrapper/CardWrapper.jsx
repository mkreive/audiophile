import classNames from 'classnames/bind';
import styles from './card-wrapper.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function CardWrapper({ children }) {
  return <div className={cn('container')}>{children}</div>;
}

CardWrapper.propTypes = {
  children: PropTypes.string,
};
