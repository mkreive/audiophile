import classNames from 'classnames/bind';
import styles from './button-group.module.scss';
import PropTypes from 'prop-types';
import { Button } from 'components';
import CounterBtn from '../CounterBtn/CounterBtn';

const cn = classNames.bind(styles);

export default function ButtonGroup({ onClick }) {
  return (
    <div className={cn('container')}>
      <CounterBtn />
      <Button theme='orange' onClick={onClick}>
        Add to cart
      </Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  onClick: PropTypes.func,
};
