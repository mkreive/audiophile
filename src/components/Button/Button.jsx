import classNames from 'classnames/bind';
import styles from './button.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Button({ content = 'Click' }) {
  return <button className={cn('btn')}>{content}</button>;
}

Button.propTypes = {
  content: PropTypes.string,
};
