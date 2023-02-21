import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { Logo, CartIcon, Navigation } from 'components';

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn('container')}>
      <Logo />
      <Navigation />
      <CartIcon />
    </header>
  );
}
