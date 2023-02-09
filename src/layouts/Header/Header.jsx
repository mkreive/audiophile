import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cn = classNames.bind(styles);

export default function Header() {
  return <header className={cn('container')}></header>;
}
