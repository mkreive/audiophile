import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames/bind';
import styles from './image.module.scss';

const cn = classNames.bind(styles);

export default function Image({ image, index }) {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  const order = index ? index % 2 : 0;

  return (
    <div className={cn('image')} style={isTablet || isMobile ? { order: 0 } : { order: order }}>
      <img
        src={
          (!isTablet && !isMobile && image.desktop) ||
          (isMobile && image.mobile) ||
          (isTablet && image.tablet) ||
          image
        }
        alt={image.alt}
      />
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  index: PropTypes.number,
};
