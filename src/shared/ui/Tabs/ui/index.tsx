import classNames from 'classnames';
import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';

import { TabsTitle } from '../types';

import styles from './styles.module.scss';

interface Props {
  activeIndex: number;
  layout: 'lined' | 'buttons';
  setActiveIndex: (newIndex: number) => void;
  titles: TabsTitle[];
  className?: string;
  tabClassName?: string;
}

function Tabs(props: Props) {
  const {
    activeIndex,
    layout,
    setActiveIndex,
    titles,
    className = '',
    tabClassName = '',
  } = props;
  const [showTabs, setShowTabs] = useState(false);
  const activeTab = titles[activeIndex];

  const handleClickTab = (index: number) => {
    setActiveIndex(index);
    setShowTabs(false);
  };

  return (
    <div
      className={classNames(styles.tabs, className, {
        [styles.tabsActive]: showTabs,
      })}
    >
      <button
        className={styles.tabsHeader}
        type="button"
        onClick={() => setShowTabs((prev) => !prev)}
      >
        <span className={styles.tabsValue}>
          {activeTab.title}
          {activeTab.withBadge ? (
            <span className={styles.tabsBadge}>{activeTab.badgeNumber}</span>
          ) : null}
        </span>
        <BiChevronRight className={styles.tabsChevron} />
      </button>
      <div className={styles.tabsContainer}>
        <ul
          className={classNames(
            styles.tabsList,
            { [styles.tabsListLined]: layout === 'lined' },
            { [styles.tabsListButtons]: layout === 'buttons' }
          )}
        >
          {titles.map((item, index) => (
            <li
              className={classNames(styles.tabsItem, tabClassName, {
                [styles.tabsItemActive]: index === activeIndex,
              })}
              key={item.id}
            >
              <button
                className={styles.tabsButton}
                type="button"
                onClick={() => handleClickTab(index)}
              >
                <span className={styles.tabsValue}>
                  {item.title}
                  {item.withBadge ? (
                    <span className={styles.tabsBadge}>{item.badgeNumber}</span>
                  ) : null}
                </span>
                <BsCheck className={styles.tabsCheck} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tabs;
