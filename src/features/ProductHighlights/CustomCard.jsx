import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './product-card.module.scss';
import { Heading, Paragraph, Button } from 'components';

const cn = classNames.bind(styles);

export default function CustomCard({ product }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <div className={cn('custom-card')}>
      <div className={cn('custom-card__img')}>
        <img
          src={
            (isTabletOrMobile && product.imageTablet) ||
            (isMobile && product.imageMobile) ||
            (!isMobile && !isTabletOrMobile && product.image)
          }
          alt={product.name}
        />
      </div>
      <div className={cn('custom-card__text')}>
        <Heading tag='h1' theme='white'>
          {product.name}
        </Heading>
        <Paragraph theme='gray'>{product.info}</Paragraph>
        <Button theme='black'>See product</Button>
      </div>
      <svg
        width='944'
        height='944'
        xmlns='http://www.w3.org/2000/svg'
        className={cn('custom-card__pattern')}
      >
        <g stroke='#FFF' fill='none' fillRule='evenodd' opacity='.202'>
          <circle cx='472' cy='472' r='235.5' />
          <circle cx='472' cy='472' r='270.5' />
          <circle cx='472' cy='472' r='471.5' />
        </g>
      </svg>
    </div>
  );
}

CustomCard.propTypes = {
  product: PropTypes.string,
};
