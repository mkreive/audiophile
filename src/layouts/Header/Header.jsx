import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { Logo, CartIcon, Navigation, MobileNavigation, DropdownMenu } from 'components';
import { Modal } from 'layouts';

const cn = classNames.bind(styles);

export default function Header() {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [dropMenuShown, setDropMenuShown] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  const handleMenuClick = function (event) {
    setDropMenuShown(event.checked);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropMenuShown(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <header ref={wrapperRef} className={cn('container')}>
      <div className={cn('container__items')}>
        {isTabletOrMobile && (
          <MobileNavigation onChange={handleMenuClick} checked={dropMenuShown} />
        )}
        <Logo />
        {!isTabletOrMobile && <Navigation />}
        <CartIcon />
      </div>
      <DropdownMenu visible={dropMenuShown} mobile={isMobile} onClick={handleMenuClick} />
      {dropMenuShown && <Modal />}
    </header>
  );
}
