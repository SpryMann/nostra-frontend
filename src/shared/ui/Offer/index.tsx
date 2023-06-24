import classNames from 'classnames';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function Offer(props: Props) {
  const { className = '' } = props;

  return (
    <div className={classNames('container', className)}>
      <div className={styles.offer}>
        <div className={styles.offerImageWrapper}>
          <img
            className={styles.offerImage}
            src="/images/offer.jpg"
            alt="Two girls in white clothes lying on the floor"
          />
          <div className={styles.offerImageOverlay} />
        </div>
        <div className={styles.offerContent}>
          <p className={styles.offerSuptitle}>Limiter offer</p>
          <h2 className={styles.offerTitle}>
            35% off only this friday
            <br className={styles.offerSeparator} /> and get special gift
          </h2>
          <Link className={styles.offerButton} to="/shop">
            Grab it now
            <BsArrowRight className={styles.offerIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offer;
