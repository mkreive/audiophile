import { ScrollRestoration, Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './root-layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

const cn = classNames.bind(styles);

export default function RootLayout() {
  return (
    <div className={cn('container')}>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
