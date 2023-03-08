import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './products-section.module.scss';
import { Image, SeeProduct } from 'components';
import CardLayout from 'layouts/CardLayout/CardLayout';

const cn = classNames.bind(styles);

export default function ProductsSection({ data }) {
  return (
    <div className={cn('container')}>
      {data.map((product, i) => (
        <CardLayout key={product.id}>
          <Image image={product.images.allProductsPage} index={i + 1} />
          <SeeProduct data={product} />
        </CardLayout>
      ))}
    </div>
  );
}

ProductsSection.propTypes = {
  data: PropTypes.array,
};
