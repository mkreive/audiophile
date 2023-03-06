import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames/bind';
import styles from './image-layout.module.scss';

const cn = classNames.bind(styles);

export default function ImageLayout({ image, index }) {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  const order = index ? index % 2 : 0;

  return (
    <div className={cn('image')} style={isTablet || isMobile ? { order: 0 } : { order: order }}>
      <img
        src={
          (!isTablet && image.imageProduct) ||
          (isMobile && image.imageProduct) ||
          (isTablet && image.imageProductTablet)
        }
        alt={image.name}
      />
    </div>
  );
}

ImageLayout.propTypes = {
  image: PropTypes.object,
  index: PropTypes.number,
};
