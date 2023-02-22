import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './heading.module.scss';

const cn = classNames.bind(styles);

export default function Heading({ tag, theme, children }) {
  const Tag = tag;
  return <Tag className={cn(tag, theme)}>{children}</Tag>;
}

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']).isRequired,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
