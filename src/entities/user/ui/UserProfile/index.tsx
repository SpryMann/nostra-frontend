import classNames from 'classnames';
import { BiPencil, BiPhoneCall } from 'react-icons/bi';
import { BsEnvelope, BsThreeDotsVertical } from 'react-icons/bs';
import { AvatarImage, TextureImage } from 'shared/assets';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function UserProfile(props: Props) {
  const { className = '' } = props;

  return (
    <div className={classNames(styles.profile, className)}>
      <div className={styles.profileTop}>
        <div className={styles.profileCoverWrapper}>
          <img
            className={styles.profileCover}
            src={TextureImage}
            alt="Profile cover"
          />
          <div className={styles.profileCoverOverlay} />
        </div>
        <div className={styles.profileImageWrapper}>
          <button className={styles.profileImageEdit} type="button">
            <BiPencil className={styles.profileIcon} />
          </button>
          <img
            className={styles.profileImage}
            src={AvatarImage}
            alt="Rhaenyra Targaryen"
          />
        </div>
      </div>
      <div className={classNames(styles.info, styles.profileBottom)}>
        <div className={styles.infoTop}>
          <h1 className={styles.infoName}>Rhaenyra Targaryen</h1>
          <button
            className={classNames(styles.button, styles.infoButton)}
            type="button"
          >
            <BsThreeDotsVertical className={styles.buttonIcon} />
            <span className={styles.buttonText}>Options</span>
          </button>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <BsEnvelope className={styles.infoIcon} />
            <span className={styles.infoText}>rhaenyra@gmail.com</span>
          </li>
          <li className={styles.infoItem}>
            <BiPhoneCall className={styles.infoIcon} />
            <span className={styles.infoText}>(212) 446-7622</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
