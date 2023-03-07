import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './gallery.module.scss';

const cn = classNames.bind(styles);

export default function Gallery({ data }) {
  return (
    <div className={cn('container')}>
      <div className='container__left'>
        <img className={cn('img')} src={data[0]} alt='dsdds' />
        <img className={cn('img')} src={data[1]} alt='dsdds' />
      </div>
      <div className={cn('container__right')}>
        <img className={cn('img')} src={data[2]} alt='dsdds' />
      </div>
    </div>
  );
}

Gallery.propTypes = {
  data: PropTypes.array,
};
