import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-section.module.scss';

import { Image, BuyProduct, Features, Gallery } from 'components';

const cn = classNames.bind(styles);

export default function Product({ data, onClick }) {
  return (
    <div className={cn('container')}>
      <div className={cn('product')}>
        <Image image={data.images.productPage} />
        <BuyProduct data={data} onClick={onClick} />
      </div>
      <Features features={data.features} content={data.inBox} />
      <Gallery images={data.images.gallery} />
    </div>
  );
}

Product.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};
