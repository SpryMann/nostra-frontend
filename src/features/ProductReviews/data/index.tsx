import { Review } from 'entities/product';
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

export const productReviewsData: Review[] = [
  {
    id: 1,
    image: DiscussionsFirstImage,
    name: 'Kathryn Murphy',
    date: '1 week ago',
    rating: 5,
    text: 'The fit is perfect, and the quality is top-notch.',
    likes: 7,
  },
  {
    id: 2,
    image: DiscussionsSecondImage,
    name: 'Esther Howard',
    date: '1 week ago',
    rating: 5,
    text: "I recently purchased the gray blazer jacket for women, and I couldn't be happier with my purchase!",
    likes: 2,
  },
  {
    id: 3,
    image: DiscussionsThirdImage,
    name: 'Kristin Watson',
    date: '2 weeks ago',
    rating: 5,
    text: 'I highly recommend this blazer to any woman looking for a timeless and chic addition to their wardrobe.',
    likes: 1,
  },
  {
    id: 4,
    image: DiscussionsFourthImage,
    name: 'Dianne Russell',
    date: '3 weeks ago',
    rating: 5,
    text: 'It provides just the right amount of warmth without making me too hot.',
    likes: 2,
  },
  {
    id: 5,
    image: DiscussionsFifthImage,
    name: 'Cameron Williamson',
    date: '1 month ago',
    rating: 5,
    text: "I've received multiple compliments on how stylish it looks.",
    likes: 0,
  },
  {
    id: 6,
    image: DiscussionsSixthImage,
    name: 'Jenny Wilson',
    date: '1 month ago',
    rating: 5,
    text: "It's versatile enough to wear to work or dress up for a night out.",
    likes: 5,
  },
];
