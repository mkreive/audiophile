import classNames from 'classnames/bind';
import styles from './cart-item.module.scss';
import PropTypes from 'prop-types';
import { Image, Paragraph } from 'components';
import CounterBtn from '../CounterBtn/CounterBtn';

const cn = classNames.bind(styles);

export default function CartItem({ product }) {
  let price = `$ ${product.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

  return (
    <li className={cn('container')}>
      <div className={cn('container__group')}>
        <Image image={product.image} />
        <div className={cn('group')}>
          <Paragraph theme='bold--small'>{product.name}</Paragraph>
          <Paragraph theme='bold--smallest'>{price}</Paragraph>
        </div>
      </div>
      <CounterBtn />
    </li>
  );
}

CartItem.propTypes = {
  product: PropTypes.object,
};
