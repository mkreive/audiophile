import classNames from 'classnames/bind';
import styles from './header.module.scss';
import Logo from '../../components/Logo/Logo';
import CartIcon from '../../components/Cart/CartIcon';
import Navigation from '../../components/Navigation/Navigation';

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
