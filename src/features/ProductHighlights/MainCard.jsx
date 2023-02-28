import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-card.module.scss';

const cn = classNames.bind(styles);

export default function MainCard(props) {
  return <div className={cn('main-card')}></div>;
}

MainCard.propTypes = {
  type: PropTypes.string,
};
