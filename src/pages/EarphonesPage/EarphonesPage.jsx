import classNames from 'classnames/bind';
import styles from './earphones-page.module';

const cn = classNames.bind(styles);

export default function EarphonesPage() {
  return (
    <div className={cn('container')}>
      <EarphonesPageHero />
      <EarphonesPageProducts />
      <ShopLinks />
      <Article />
    </div>
  );
}
