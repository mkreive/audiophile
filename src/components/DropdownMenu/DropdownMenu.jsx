import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './dropdown-menu.module.scss';
import { Menu } from 'components';

const cn = classNames.bind(styles);

export default function DropdownMenu(props) {
  return (
    <div
      onClick={props.onClick}
      className={cn('container')}
      style={{ height: props.visible && (!props.mobile ? '350px' : '900px') }}
    >
      <Menu />
    </div>
  );
}

DropdownMenu.propTypes = {
  visible: PropTypes.bool,
  mobile: PropTypes.bool,
  onClick: PropTypes.func,
};
