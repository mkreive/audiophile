import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-section.module.scss';
import CardLayout from 'layouts/CardLayout/CardLayout';
import { Image, BuyProduct, Features, Gallery } from 'components';

const cn = classNames.bind(styles);

export default function Product({ data, onClick }) {
  return (
    <div className={cn('container')}>
      <CardLayout>
        <Image image={data.images.productPage} />
        <BuyProduct data={data} onClick={onClick} />
      </CardLayout>
      <Features features={data.features} content={data.inBox} />
      <Gallery images={data.images.gallery} />
    </div>
  );
}

Product.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};
