import classNames from 'classnames';
import { useRef, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AvatarImage } from 'shared/assets';
import { useOnClickOutside } from 'shared/lib';

import menuData from './data';

import styles from './styles.module.scss';

interface Props {
  isActive: boolean;
  toggleActive: () => void;
  onClose: () => void;
  className?: string;
}

function Menu(props: Props) {
  const { isActive, toggleActive, onClose, className = '' } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAuth, setIsAuth] = useState(true);

  useOnClickOutside(containerRef, onClose);

  const handleLogout = () => setIsAuth(false);

  return (
    <div
      className={classNames(styles.menu, className, {
        [styles.menuActive]: isActive,
      })}
      ref={containerRef}
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className={styles.menuButton}
        type="button"
        onClick={toggleActive}
      >
        <BsPerson className={styles.menuIcon} />
      </button>
      <div className={styles.menuContainer}>
        <div className={styles.menuContent}>
          {isAuth ? (
            <>
              <div className={styles.menuHeader}>
                <div className={styles.menuAvatarWrapper}>
                  <img
                    className={styles.menuAvatar}
                    src={AvatarImage}
                    alt="Rhaenyra Targaryen"
                  />
                </div>
                <div className={styles.menuInfo}>
                  <h2 className={styles.menuName}>Rhaenyra Targaryen</h2>
                  <p className={styles.menuEmail}>rhaenyra@nostra.com</p>
                </div>
              </div>
              <ul className={styles.menuList}>
                {menuData.map((item) => (
                  <li
                    className={classNames(styles.menuItem, {
                      [styles.menuItemUnderline]: item.withUnderline,
                    })}
                    key={item.id}
                  >
                    <Link className={styles.link} to={item.path}>
                      {item.icon(styles.linkIcon)}
                      {item.text}
                    </Link>
                  </li>
                ))}
                <li className={styles.menuItem}>
                  <button
                    className={styles.link}
                    type="button"
                    onClick={handleLogout}
                  >
                    <MdLogout className={styles.linkIcon} />
                    Log out
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <div className={styles.unauth}>
              <div className={styles.unauthIconWrapper}>
                <BsPerson className={styles.unauthIcon} />
              </div>
              <h2 className={styles.unauthMessage}>
                You&apos;re not authorized
              </h2>
              <Link
                className={styles.unauthButton}
                to="/login"
                onClick={onClose}
              >
                Log in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
