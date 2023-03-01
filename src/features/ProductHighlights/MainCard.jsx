import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-card.module.scss';
import { Heading, Button } from 'components';

const cn = classNames.bind(styles);

export default function MainCard({ product }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <div className={cn('main-card')}>
      <div className={cn('main-card__text')}>
        <Heading tag='h4' theme='black'>
          {product.name}
        </Heading>
        <Button theme='white'>See product</Button>
      </div>
      <img
        src={
          (isTabletOrMobile && product.imageTablet) ||
          (isMobile && product.imageMobile) ||
          (!isMobile && !isTabletOrMobile && product.image)
        }
        alt={product.name}
        className={cn('main-card__img')}
      />
    </div>
  );
}

MainCard.propTypes = {
  product: PropTypes.string,
};
