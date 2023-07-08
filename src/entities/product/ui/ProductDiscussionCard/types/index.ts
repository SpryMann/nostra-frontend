interface DiscussionWithoutReplies {
  id: number;
  image: string;
  name: string;
  date: string;
  text: string;
  likes: number;
  withReplies: false;
}

interface DiscussionWithReplies {
  id: number;
  image: string;
  name: string;
  date: string;
  text: string;
  likes: number;
  withReplies: true;
  replies: (DiscussionWithoutReplies | DiscussionWithReplies)[];
}

export type Discussion = DiscussionWithoutReplies | DiscussionWithReplies;
