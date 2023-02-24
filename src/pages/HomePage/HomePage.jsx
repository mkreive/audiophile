import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './home-page.module.scss';
import { Hero, Menu } from 'components';
import { MainLayout } from 'layouts';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>Audiophile - Home</title>
      </Helmet>
      <Hero />
      <MainLayout>
        <Menu />
      </MainLayout>
    </div>
  );
}
