import classNames from 'classnames/bind';
import styles from './home-page.module.scss';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <div className={cn('container')}>
      {/* <HeroSection />
      <ShopLinks />
      <ProductHighlightSection />
      <Article /> */}
    </div>
  );
}
