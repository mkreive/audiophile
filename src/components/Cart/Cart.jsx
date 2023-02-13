import classNames from 'classnames/bind';
import styles from './cart.module.scss';

const cn = classNames.bind(styles);

export default function Cart() {
  return <div className={cn('container')}></div>;
}
