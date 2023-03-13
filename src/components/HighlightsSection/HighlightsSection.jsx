import classNames from 'classnames/bind';
import styles from './highlights-section.module.scss';
import PropTypes from 'prop-types';
import { Heading } from 'components';
import HighlightProduct from './HighlightProduct';
import { getRandom } from 'utils';

const cn = classNames.bind(styles);

export default function HighlightSection({ products }) {
  const randProducts = getRandom(products, 3);

  return (
    <div className={cn('container')}>
      <Heading tag='h3' theme='black'>
        You may also like
      </Heading>
      <div className={cn('container__products')}>
        {randProducts.map((product, i) => (
          <HighlightProduct key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

HighlightSection.propTypes = {
  products: PropTypes.array,
};
