import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import { Button, Heading, Paragraph } from 'components';

const cn = classNames.bind(styles);

export default function Cart() {
  const totalPrice = 32222;
  const count = 3;

  return (
    <div className={cn('container')}>
      <div className={cn('container__group')}>
        <Heading tag='h6' theme='black'>{`Cart (${count})`}</Heading>
        <Button theme='underlined'>Remove all</Button>
      </div>
      <ul className={cn('products')}>
        <li>product</li>
      </ul>
      <div className={cn('container__group')}>
        <Paragraph>Total</Paragraph>
        <Paragraph>{`$${totalPrice}`}</Paragraph>
      </div>
      <Button theme='orange'> Checkout</Button>
    </div>
  );
}
