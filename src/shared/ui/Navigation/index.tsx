import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import navigationData from './data';

import styles from './styles.module.scss';

interface Props {
  isActive: boolean;
  onClose: () => void;
  searchbar: React.ReactNode;
  className?: string;
}

function Navigation(props: Props) {
  const { isActive, onClose, searchbar, className = '' } = props;
  const isAuth = true;

  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null
  );
  const [activeSubdropdownIndex, setActiveSubdropdownIndex] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (isActive) {
      setActiveDropdownIndex(null);
      setActiveSubdropdownIndex(null);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isActive]);

  return (
    <div
      className={classNames(styles.navigation, className, {
        [styles.navigationActive]: isActive,
      })}
      onClick={onClose}
    >
      <div
        className={styles.navigationContent}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.navigationSearch}>{searchbar}</div>
        <nav className={styles.navigationList}>
          {navigationData.map((item, index) => (
            <div className={styles.navigationItem} key={item.id}>
              <Link
                className={classNames(styles.navigationLink, {
                  [styles.navigationLinkWithSubmenu]: item.hasSubmenu,
                })}
                to={item.link}
                onClick={onClose}
              >
                {item.name}
                {item.hasSubmenu ? (
                  <FiChevronDown className={styles.navigationIcon} />
                ) : null}
              </Link>
              {item.hasSubmenu ? (
                <button
                  className={classNames(
                    styles.navigationLink,
                    styles.navigationLinkButton
                  )}
                  type="button"
                  onClick={() => {
                    setActiveDropdownIndex((prev) =>
                      prev === index ? null : index
                    );
                    setActiveSubdropdownIndex(null);
                  }}
                >
                  {item.name}
                  {index === activeDropdownIndex ? (
                    <FiChevronUp className={styles.navigationIcon} />
                  ) : (
                    <FiChevronDown className={styles.navigationIcon} />
                  )}
                </button>
              ) : null}
              {item.hasSubmenu && item.items.length ? (
                <div className={styles.navigationDropdowns}>
                  {item.items.map((subItem, subIndex) => (
                    <div
                      className={classNames(styles.dropdown, {
                        [styles.dropdownActive]: index === activeDropdownIndex,
                      })}
                      key={subItem.id}
                    >
                      <div className={styles.dropdownHeader}>
                        {subItem.links.length ? (
                          <button
                            className={styles.dropdownButton}
                            type="button"
                            onClick={() =>
                              setActiveSubdropdownIndex((prev) =>
                                prev === subIndex ? null : subIndex
                              )
                            }
                          >
                            <h2 className={styles.dropdownTitle}>
                              {subItem.name}
                            </h2>
                            <FiChevronDown className={styles.dropdownIcon} />
                          </button>
                        ) : (
                          <h2 className={styles.dropdownTitle}>
                            {subItem.name}
                          </h2>
                        )}
                      </div>
                      <ul
                        className={classNames(styles.dropdownList, {
                          [styles.dropdownListActive]:
                            activeSubdropdownIndex === subIndex,
                        })}
                      >
                        {subItem.links.map((link) => (
                          <li className={styles.dropdownItem} key={link.id}>
                            <Link
                              className={styles.dropdownLink}
                              to={link.link}
                              onClick={onClose}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className={styles.navigationButtonWrapper}>
          <Link
            className={styles.navigationButton}
            to={isAuth ? '/profile' : '/login'}
            onClick={onClose}
          >
            {isAuth ? 'Profile' : 'Log in'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
