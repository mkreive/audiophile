import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn('container')}>
      <div className={cn('logo')}>audiophile</div>
      <nav className={cn('navigation')}>
        <Link>Home</Link>
        <Link>Headphones</Link>
        <Link>Speakers</Link>
        <Link>Earphones</Link>
      </nav>
      <div className={cn('cart')}>cart</div>
    </header>
  );
}
