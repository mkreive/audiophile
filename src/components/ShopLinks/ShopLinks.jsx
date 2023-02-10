import classNames from 'classnames/bind';
import styles from './shop-links.module.scss';
import ShopLink from './ShopLink';

const cn = classNames.bind(styles);

export default function ShopLinks() {
  return (
    <div className={cn('container')}>
      <ShopLink />
      <ShopLink />
      <ShopLink />
    </div>
  );
}
