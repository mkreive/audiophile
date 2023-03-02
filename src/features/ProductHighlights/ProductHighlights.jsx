import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-highlights.module.scss';
import ProductCard from './ProductCard';

const cn = classNames.bind(styles);

export default function ProductHighlights({ productsData }) {
  return (
    <div className={cn('container')}>
      {productsData &&
        productsData.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  );
}

ProductHighlights.propTypes = {
  productsData: PropTypes.array,
};
