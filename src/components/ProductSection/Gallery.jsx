import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './gallery.module.scss';
import { Image } from 'components';

const cn = classNames.bind(styles);

export default function Gallery({ images }) {
  return (
    <div className={cn('container')}>
      <div className={cn('container__left')}>
        <Image image={images[0]} />
        <Image image={images[1]} />
      </div>
      <div className={cn('container__right')}>
        <Image image={images[2]} />
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.array,
};
