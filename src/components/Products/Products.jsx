import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './products.module.scss';
import Product from './Product';

const cn = classNames.bind(styles);

export default function Products({ data }) {
  return (
    <div className={cn('container')}>
      {data.map((product, i) => (
        <Product key={product.id} data={product} index={i + 1} />
      ))}
    </div>
  );
}

Products.propTypes = {
  data: PropTypes.array,
};
