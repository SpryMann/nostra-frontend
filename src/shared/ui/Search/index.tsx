import classNames from 'classnames';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function Search(props: Props) {
  const { className = '' } = props;
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className={classNames(styles.search, className)}>
      <FiSearch className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Search;
