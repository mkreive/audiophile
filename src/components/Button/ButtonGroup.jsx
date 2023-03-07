import classNames from 'classnames/bind';
import styles from './button-group.module.scss';
import PropTypes from 'prop-types';
import { Button } from 'components';
import { useState } from 'react';

const cn = classNames.bind(styles);

export default function ButtonGroup({ onClick }) {
  const [count, setCount] = useState(1);

  const handleCount = function () {
    console.log('ountina');
    setCount(count);
  };

  return (
    <div className={cn('container')}>
      <div className={cn('counter')}>
        <span className={cn('counter__minus')} onClick={handleCount}>
          -
        </span>
        <span className={cn('counter__number')}>{count}</span>
        <span className={cn('counter__add')} onClick={handleCount}>
          +
        </span>
      </div>
      <Button theme='orange' onClick={onClick}>
        Add to cart
      </Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  onClick: PropTypes.func,
};
