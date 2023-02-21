import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './drop-menu.module.scss';

const cn = classNames.bind(styles);

export default function DropMenu() {
  return (
    <nav className={cn('container')}>
      <Link to='/home' className={cn('link')}>
        Home
      </Link>
      <Link to='/headphones' className={cn('link')}>
        Headphones
      </Link>
      <Link to='/speakers' className={cn('link')}>
        Speakers
      </Link>
      <Link to='/earphones' className={cn('link')}>
        Earphones
      </Link>
    </nav>
  );
}
