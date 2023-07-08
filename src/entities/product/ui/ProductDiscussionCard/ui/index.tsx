import classNames from 'classnames';
import { useState } from 'react';
import { BiShare } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { Textarea } from 'shared/ui';

import { Discussion } from '../types';

import styles from './styles.module.scss';

type Props =
  | {
      children: React.ReactNode;
      data: Discussion;
      withChildren: true;
    }
  | {
      data: Discussion;
      withChildren: false;
    };

function ProductDiscussionCard(props: Props) {
  const { data, withChildren } = props;
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className={styles.discussion}>
      <div className={styles.discussionImageWrapper}>
        <img
          className={styles.discussionImage}
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className={styles.discussionContent}>
        <div className={styles.discussionTop}>
          <h2 className={styles.discussionName}>{data.name}</h2>
          <span className={styles.discussionDate}>{data.date}</span>
        </div>
        <p className={styles.discussionText}>{data.text}</p>
        <div className={styles.discussionActions}>
          <button className={styles.discussionButton} type="button">
            <BsHeart className={styles.discussionIcon} />
            Like
          </button>
          <button
            className={styles.discussionButton}
            type="button"
            onClick={() => setShowReplyForm((prev) => !prev)}
          >
            <BiShare className={styles.discussionIcon} />
            Reply
          </button>
          {data.likes ? (
            <span className={styles.discussionStats}>{data.likes} likes</span>
          ) : null}
          {data.withReplies && data.replies.length ? (
            <span className={styles.discussionStats}>
              {data.replies.length} replies
            </span>
          ) : null}
        </div>
        <Textarea
          className={classNames(styles.discussionTextarea, {
            [styles.discussionTextareaActive]: showReplyForm,
          })}
          buttonText="Send reply"
          placeholder="Enter a description"
        />
        {data.withReplies && data.replies.length ? (
          <div
            className={classNames(styles.replies, styles.discussionReplies, {
              [styles.repliesActive]: showReplies,
            })}
          >
            <button
              className={styles.repliesButton}
              type="button"
              onClick={() => setShowReplies((prev) => !prev)}
            >
              {showReplies ? 'Hide replies' : 'Show replies'}
            </button>
            {withChildren ? (
              <div className={styles.repliesContent}>{props.children}</div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductDiscussionCard;
