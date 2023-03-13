import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './highlights-section.module.scss';
import PropTypes from 'prop-types';
import { Button, Heading, Image } from 'components';

const cn = classNames.bind(styles);

export default function HighlightProduct({ product }) {
  const name = product.name.toLowerCase().replace('headphones', '').replace('earphones', '');

  return (
    <div className={cn('product-card')}>
      <Image image={product.images.productPage} />
      <Heading tag='h5' theme='black'>
        {name}
      </Heading>
      <Link to={`${product.id}`} className={cn('link')}>
        <Button theme='orange'>See product</Button>
      </Link>
    </div>
  );
}

HighlightProduct.propTypes = {
  product: PropTypes.object,
};
