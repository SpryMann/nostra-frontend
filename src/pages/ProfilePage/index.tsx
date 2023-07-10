import classNames from 'classnames';
import { UserProfile } from 'entities/user';

import styles from './styles.module.scss';

function ProfilePage() {
  return (
    <div className={classNames('container', styles.profile)}>
      <UserProfile />
    </div>
  );
}

export default ProfilePage;
