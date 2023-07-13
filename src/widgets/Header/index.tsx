import classNames from 'classnames';
import { Cart, Menu } from 'features';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Logo, Navigation, Search } from 'shared/ui';

import styles from './styles.module.scss';

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseNavigation = () => setShowNavigation(false);
  const handleCloseCart = () => setShowCart(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleToggleNavigation = () => {
    if (showCart) {
      handleCloseCart();
    }

    if (showMenu) {
      handleCloseMenu();
    }

    setShowNavigation((prev) => !prev);
  };
  const handleToggleCart = () => {
    if (showNavigation) {
      handleCloseNavigation();
    }

    if (showMenu) {
      handleCloseMenu();
    }

    setShowCart((prev) => !prev);
  };
  const handleToggleMenu = () => {
    if (showCart) {
      handleCloseCart();
    }

    if (showNavigation) {
      handleCloseNavigation();
    }

    setShowMenu((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <div className={classNames('container', styles.headerContent)}>
        <button
          className={classNames(styles.button, styles.buttonOpenMenu)}
          type="button"
          onClick={handleToggleNavigation}
        >
          {showNavigation ? (
            <IoClose className={styles.buttonIcon} />
          ) : (
            <IoMenu className={styles.buttonIcon} />
          )}
        </button>
        <Logo
          className={styles.headerLogo}
          onClick={() => {
            handleCloseCart();
            handleCloseNavigation();
          }}
        />
        <Navigation
          isActive={showNavigation}
          onClose={handleCloseNavigation}
          searchbar={<Search placeholder="Search" />}
        />
        <Search className={styles.headerSearch} placeholder="Search" />
        <Cart
          className={styles.headerCart}
          isActive={showCart}
          toggleActive={handleToggleCart}
          onClose={handleCloseCart}
        />
        <Menu
          className={styles.headerMenu}
          isActive={showMenu}
          toggleActive={handleToggleMenu}
          onClose={handleCloseMenu}
        />
      </div>
    </div>
  );
}

export default Header;
