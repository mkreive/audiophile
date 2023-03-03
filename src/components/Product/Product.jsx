import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import { Heading, Paragraph } from 'components';

const cn = classNames.bind(styles);

export default function Product({ product, order }) {
  return (
    <div className={cn('container')}>
      <div className={cn('container__img')} style={{ order: order }}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={cn('container__text')}>
        <Heading tag='h3' theme='black'>
          {product.name}
        </Heading>
        <Paragraph theme='black'>{product.info}</Paragraph>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  order: PropTypes.number,
};
