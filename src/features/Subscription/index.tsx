import classNames from 'classnames';
import { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Subscription() {
  const [emailValue, setEmailValue] = useState('');

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailValue('');
  };

  return (
    <div className={styles.subscription}>
      <h2 className={styles.subscriptionTitle}>
        Subscribe to our newsletter to get updates to our latest collections
      </h2>
      <p className={styles.subscriptionDescription}>
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <form
        className={classNames(styles.form, styles.subscriptionForm)}
        onSubmit={handleSubmitForm}
      >
        <div className={styles.formGroup}>
          <FaRegEnvelope className={styles.formIcon} />
          <input
            className={styles.formInput}
            type="email"
            placeholder="Enter your email"
            autoComplete="on"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
        </div>
        <button className={styles.formButton} type="submit">
          Subscribe
        </button>
      </form>
      <p className={styles.subscriptionMessage}>
        You will be able to unsubscribe at any time.
        <br />
        Read our Privacy Policy{' '}
        <Link className={styles.subscriptionLink} to="/policy">
          here
        </Link>
      </p>
    </div>
  );
}

export default Subscription;
