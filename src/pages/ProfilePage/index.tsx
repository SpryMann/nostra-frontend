import classNames from 'classnames';
import { UserProfile } from 'entities/user';
import { OrderHistory } from 'features';
import { useState } from 'react';
import { Tabs } from 'shared/ui';

import profileTabsData from './data';

import styles from './styles.module.scss';

function ProfilePage() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className={classNames('container', styles.profile)}>
      <UserProfile className={styles.profileSection} />
      <div className={styles.profileSection}>
        <Tabs
          className={styles.profileTabs}
          activeIndex={activeTabIndex}
          layout="buttons"
          setActiveIndex={(newIndex: number) => setActiveTabIndex(newIndex)}
          titles={profileTabsData}
        />
      </div>
      <OrderHistory
        className={classNames(
          styles.profileSection,
          styles.profileSectionWrapper
        )}
      />
    </div>
  );
}

export default ProfilePage;
