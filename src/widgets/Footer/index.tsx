import { Link } from 'react-router-dom';
import { Logo } from 'shared/ui';

import footerMenu from './data';

import styles from './styles.module.scss';
import {
  PaymentMastercardImage,
  PaymentPaypalImage,
  PaymentVisaImage,
} from 'shared/assets';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerInfo}>
            <Logo className={styles.footerLogo} />
            <p className={styles.footerText}>
              Specializes in providing high-quality, stylish products for your
              wardrobe.
            </p>
          </div>
          <div className={styles.footerNavigation}>
            {footerMenu.map((item) => (
              <ul className={styles.navigation} key={item.id}>
                <li className={styles.navigationTitleWrapper}>
                  <h2 className={styles.navigationTitle}>{item.title}</h2>
                </li>
                {item.links.map((link) => (
                  <li className={styles.navigationItem} key={link.id}>
                    <Link className={styles.navigationLink} to={link.path}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
            <ul className={styles.navigation}>
              <li className={styles.navigationTitleWrapper}>
                <h2 className={styles.navigationTitle}>Payment methods</h2>
              </li>
              <li className={styles.navigationPayments}>
                <img
                  className={styles.navigationLogo}
                  src={PaymentMastercardImage}
                  alt="Mastercard logo"
                />
                <img
                  className={styles.navigationLogo}
                  src={PaymentVisaImage}
                  alt="Visa logo"
                />
                <img
                  className={styles.navigationLogo}
                  src={PaymentPaypalImage}
                  alt="Paypal logo"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerText}>
            Copyright © 2022 Nostra. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
