import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { Logo, CartIcon, Navigation, MobileNavigation, DropMenu } from 'components';

const cn = classNames.bind(styles);

export default function Header() {
  const [dropMenuShown, setDropMenuShown] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const handleMenuClick = function (event) {
    setDropMenuShown(event.checked);
  };

  return (
    <header className={cn('container')}>
      {isTabletOrMobile && <MobileNavigation onChange={handleMenuClick} />}
      <Logo />
      {!isTabletOrMobile && <Navigation />}
      <CartIcon />
      {dropMenuShown && <DropMenu />}
    </header>
  );
}
