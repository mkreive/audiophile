import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import { Button, CartItem, Heading, Paragraph } from 'components';

const cn = classNames.bind(styles);

export default function Cart() {
  const product = {
    id: 'prod-003',
    name: 'XX99 MK I',
    price: 1750,
    image:
      'https://res.cloudinary.com/kreiva/image/upload/v1678871180/Audiophile/image-xx99-mark-one-headphones_cfxcb4.jpg',
  };
  const count = 3;
  const price = count * product.price;
  let totalPrice = `$ ${price.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

  const handleRemoveAll = function () {
    console.log('remove all');
  };

  return (
    <div className={cn('container')}>
      <div className={cn('container__group')}>
        <Heading tag='h6' theme='black'>{`Cart (${count})`}</Heading>
        <Button theme='underlined' onClick={handleRemoveAll}>
          Remove all
        </Button>
      </div>
      <ul className={cn('products')}>
        <CartItem product={product} />
        <CartItem product={product} />
      </ul>
      <div className={cn('container__group')}>
        <Paragraph theme='black'>TOTAL</Paragraph>
        <Paragraph theme='black--bold'>{totalPrice}</Paragraph>
      </div>
      <Button theme='orange'>Checkout</Button>
    </div>
  );
}
