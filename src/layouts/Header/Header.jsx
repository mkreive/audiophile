import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { Logo, CartIcon, Navigation, MobileNavigation, DropdownMenu, Cart } from 'components';
import { Modal } from 'layouts';

const cn = classNames.bind(styles);

export default function Header() {
  const wrapperRef = useRef(null);
  const [dropMenuShown, setDropMenuShown] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  const handleMenuClick = function (event) {
    setDropMenuShown(event.checked);
  };

  const handleCartActions = function () {
    console.log('carto vidui');
  };

  useOutsideAlerter(wrapperRef);
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
        <CartIcon onClick={() => setCartOpen(!cartOpen)} />
      </div>
      <DropdownMenu visible={dropMenuShown} mobile={isMobile} onClick={handleMenuClick} />
      <Cart visible={cartOpen} onClick={handleCartActions} />
      {(dropMenuShown && <Modal />) || (cartOpen && <Modal />)}
    </header>
  );
}
