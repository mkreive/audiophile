import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './home-page.module.scss';
import { Hero } from '../../components/Hero';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>Audiophile - Home</title>
      </Helmet>
      <Hero />
      <MainLayout>
        {/* <ProductHighlightSection /> */}
        {/* <Article /> */}
      </MainLayout>
    </div>
  );
}
