import classNames from 'classnames/bind';
import styles from './paragraph.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Paragraph({ theme, children }) {
  return <p className={cn(theme)}>{children}</p>;
}

Paragraph.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
