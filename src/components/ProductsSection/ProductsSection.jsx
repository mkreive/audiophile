import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './products-section.module.scss';
import { Product } from 'components';

const cn = classNames.bind(styles);

export default function ProductsSection({ data }) {
  return (
    <div className={cn('container')}>
      {data.map((product, i) => (
        <Product key={product.id} data={product} index={i + 1} option='see' />
      ))}
    </div>
  );
}

ProductsSection.propTypes = {
  data: PropTypes.array,
};
