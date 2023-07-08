import classNames from 'classnames';
import { useState } from 'react';

import styles from './styles.module.scss';

interface Props {
  buttonText: string;
  placeholder: string;
  className?: string;
}

function Textarea(props: Props) {
  const { buttonText, placeholder, className = '' } = props;
  const [textValue, setTextValue] = useState('');

  const handleInputText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTextValue(event.target.value);

  return (
    <div className={classNames(styles.textarea, className)}>
      <textarea
        className={styles.textareaInput}
        placeholder={placeholder}
        value={textValue}
        onChange={handleInputText}
      />
      <button className={styles.textareaButton} type="button">
        {buttonText}
      </button>
    </div>
  );
}

export default Textarea;
