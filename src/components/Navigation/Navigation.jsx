import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './navigation.module.scss';

const cn = classNames.bind(styles);

export default function Navigation() {
  return (
    <nav className={cn('container')}>
      <Link className={cn('link')}>Home</Link>
      <Link className={cn('link')}>Headphones</Link>
      <Link className={cn('link')}>Speakers</Link>
      <Link className={cn('link')}>Earphones</Link>
    </nav>
  );
}
