import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './shop-links.module.scss';

const cn = classNames.bind(styles);

export default function ShopLink() {
  return (
    <Link className={cn('card')}>
      <img src='' alt='' />
      <h2>Headphones</h2>
      <button>
        Shop <span>..</span>
      </button>
      <div className={cn('card__background')}></div>
    </Link>
  );
}
