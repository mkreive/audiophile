import classNames from 'classnames/bind';
import styles from './counter-btn.module.scss';
import { useState } from 'react';

const cn = classNames.bind(styles);

export default function CounterBtn() {
  const [count, setCount] = useState(1);

  return (
    <div className={cn('container')}>
      <div className={cn('counter')}>
        <span className={cn('counter__minus')} onClick={() => setCount(count - 1)}>
          -
        </span>
        <span className={cn('counter__number')}>{count}</span>
        <span className={cn('counter__add')} onClick={() => setCount(count + 1)}>
          +
        </span>
      </div>
    </div>
  );
}
