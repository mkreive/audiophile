import { ScrollRestoration, Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './root-layout.module.scss';
import { Header, Footer } from 'layouts';

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
