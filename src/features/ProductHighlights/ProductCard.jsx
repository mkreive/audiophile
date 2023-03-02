import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-card.module.scss';
import CustomCard from './CustomCard';
import SplitCard from './SplitCard';
import MainCard from './MainCard';

const cn = classNames.bind(styles);

export default function ProductCard({ product }) {
  return (
    <div className={cn('container')}>
      {(product.cardType === 'custom' && <CustomCard product={product} />) ||
        (product.cardType === 'split' && <SplitCard product={product} />) ||
        (product.cardType === 'main' && <MainCard product={product} />)}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
