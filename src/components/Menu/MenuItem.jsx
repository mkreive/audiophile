import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './menu-item.module.scss';
import { Button, Heading } from 'components';

const cn = classNames.bind(styles);

export default function MenuItem({ item }) {
  const handleBtnClick = function () {
    console.log(item);
  };

  return (
    <div className={cn('container')}>
      <div className={cn('image', item)} />
      <Heading tag='h6' theme='black'>
        {item}
      </Heading>
      <Button theme='transparent' onClick={handleBtnClick}>
        Shop
      </Button>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.string,
};
