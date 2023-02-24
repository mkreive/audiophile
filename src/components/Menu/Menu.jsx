import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import MenuItem from './MenuItem';

const cn = classNames.bind(styles);

export default function Menu() {
  return (
    <nav className={cn('container')}>
      <Link to='/headphones' className={cn('link')}>
        <MenuItem item='headphones' />
      </Link>
      <Link to='/speakers' className={cn('link')}>
        <MenuItem item='speakers' />
      </Link>
      <Link to='/earphones' className={cn('link')}>
        <MenuItem item='earphones' />
      </Link>
    </nav>
  );
}
