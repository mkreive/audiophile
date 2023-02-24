import { Animated } from 'react-animated-css';
import classNames from 'classnames/bind';
import styles from './dropdown-menu.module.scss';
import { Menu } from 'components';

const cn = classNames.bind(styles);

export default function DropdownMenu() {
  return (
    <Animated
      animationIn='slideInDown'
      animationOut='slideOutUp'
      animationInDuration={400}
      animationOutDuration={400}
      isVisible={true}
    >
      <div className={cn('container')}>
        <Menu />
      </div>
    </Animated>
  );
}
