import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-card.module.scss';

const cn = classNames.bind(styles);

export default function SplitCard(props) {
  return <div className={cn('split-card')}></div>;
}

SplitCard.propTypes = {
  type: PropTypes.string,
};
