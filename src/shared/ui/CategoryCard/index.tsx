import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  image: string;
  title: string;
  linkText: string;
  linkPath: string;
}

function CategoryCard(props: Props) {
  const { image, title, linkText, linkPath } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img className={styles.cardImage} src={image} alt={title} />
      </div>
      <div className={styles.cardOverlay}>
        <Link className={styles.cardLink} to={linkPath}>
          {linkText}
          <BsArrowRight className={styles.cardIcon} />
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
