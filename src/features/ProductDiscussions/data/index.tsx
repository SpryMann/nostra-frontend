import { Discussion } from 'entities/product';
import {
  DiscussionsFifthImage,
  DiscussionsFirstImage,
  DiscussionsFourthImage,
  DiscussionsSecondImage,
  DiscussionsSixthImage,
  DiscussionsThirdImage,
} from 'shared/assets';

export const sortData = [
  {
    label: 'Newest',
    value: 'date',
  },
  {
    label: 'Popularity',
    value: 'likes',
  },
];

export const productDiscussionsData: Discussion[] = [
  {
    id: 1,
    image: DiscussionsFirstImage,
    name: 'Kathryn Murphy',
    date: '1 week ago',
    text: 'The fit is perfect, and the quality is top-notch.',
    likes: 7,
    withReplies: true,
    replies: [
      {
        id: 1,
        image: DiscussionsSecondImage,
        name: 'Esther Howard',
        date: '5 days ago',
        text: "I recently purchased the gray blazer jacket for women, and I couldn't be happier with my purchase!",
        likes: 0,
        withReplies: false,
      },
    ],
  },
  {
    id: 2,
    image: DiscussionsSecondImage,
    name: 'Esther Howard',
    date: '2 weeks ago',
    text: "I recently purchased the gray blazer jacket for women, and I couldn't be happier with my purchase!",
    likes: 2,
    withReplies: true,
    replies: [
      {
        id: 1,
        image: DiscussionsThirdImage,
        name: 'Cameron Williamson',
        date: '2 weeks ago',
        text: "I've received multiple compliments on how stylish it looks.",
        likes: 4,
        withReplies: false,
      },
      {
        id: 2,
        image: DiscussionsFourthImage,
        name: 'Jenny Wilson',
        date: '2 weeks ago',
        text: "It's versatile enough to wear to work or dress up for a night out.",
        likes: 5,
        withReplies: false,
      },
    ],
  },
  {
    id: 3,
    image: DiscussionsFifthImage,
    name: 'Kristin Watson',
    date: '2 weeks ago',
    text: 'I highly recommend this blazer to any woman looking for a timeless and chic addition to their wardrobe.',
    likes: 1,
    withReplies: true,
    replies: [
      {
        id: 1,
        image: DiscussionsThirdImage,
        name: 'Cameron Williamson',
        date: '2 weeks ago',
        text: "I've received multiple compliments on how stylish it looks.",
        likes: 4,
        withReplies: false,
      },
    ],
  },
  {
    id: 4,
    image: DiscussionsSixthImage,
    name: 'Dianne Russell',
    date: '1 month ago',
    text: 'It provides just the right amount of warmth without making me too hot.',
    likes: 2,
    withReplies: false,
  },
];
