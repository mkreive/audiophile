import classNames from 'classnames/bind';
import styles from './home-page.module.scss';
import { Hero } from '../../components/Hero';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import ShopLinks from '../../components/ShopLinks/ShopLinks';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <div className={cn('container')}>
      <Hero />
      <MainLayout>
        <ShopLinks />
        {/* <ProductHighlightSection /> */}
        {/* <Article /> */}
      </MainLayout>
    </div>
  );
}
