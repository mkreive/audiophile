import classNames from 'classnames/bind';
import styles from './paragraph.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Paragraph({ type, children }) {
  return <p className={cn(type)}>{children}</p>;
}

Paragraph.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
