import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-card.module.scss';
import { Heading, Paragraph, Button } from 'components';

const cn = classNames.bind(styles);

export default function CustomCard({ product }) {
  return (
    <div className={cn('custom-card')}>
      <div className={cn('custom-card--img')}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={cn('custom-card--text')}>
        <Heading tag='h2' theme='white'>
          {product.name}
        </Heading>
        <Paragraph theme='gray'>{product.info}</Paragraph>
        <Button theme='white'>See product</Button>
      </div>
    </div>
  );
}

CustomCard.propTypes = {
  product: PropTypes.string,
};
