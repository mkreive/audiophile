import classNames from 'classnames/bind';
import styles from './checkout-page.module';

const cn = classNames.bind(styles);

export default function CheckoutPage() {
  return (
    <div className={cn('container')}>
      <Checkout />
      <Summary />
    </div>
  );
}
