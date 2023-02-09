import classNames from 'classnames/bind';
import styles from './home-page.module.scss';
import { Hero } from '../../components/Hero';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <div className={cn('container')}>
      <Hero />
      {/* <ShopLinks /> */}
      {/* <ProductHighlightSection /> */}
      {/* <Article /> */}
    </div>
  );
}
