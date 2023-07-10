import classNames from 'classnames';

import styles from './styles.module.scss';

function ProfilePage() {
  return (
    <div className={classNames('container', styles.profile)}>Profile page</div>
  );
}

export default ProfilePage;
