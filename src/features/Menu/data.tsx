import { BiHistory } from 'react-icons/bi';
import { BsGear, BsPerson, BsQuestionCircle } from 'react-icons/bs';
import { MdOutlineLocalShipping, MdOutlinePayment } from 'react-icons/md';

interface MenuDataItem {
  id: number;
  path: string;
  text: string;
  icon: (className: string) => React.ReactNode;
  withUnderline: boolean;
}

const menuData: MenuDataItem[] = [
  {
    id: 1,
    path: '/profile',
    text: 'View profile',
    icon: (className: string) => <BsPerson className={className} />,
    withUnderline: false,
  },
  {
    id: 2,
    path: '/settings',
    text: 'Settings',
    icon: (className: string) => <BsGear className={className} />,
    withUnderline: false,
  },
  {
    id: 3,
    path: '/support',
    text: 'Support',
    icon: (className: string) => <BsQuestionCircle className={className} />,
    withUnderline: true,
  },
  {
    id: 4,
    path: '/orders',
    text: 'Orders history',
    icon: (className: string) => <BiHistory className={className} />,
    withUnderline: false,
  },
  {
    id: 5,
    path: '/payments',
    text: 'Payment methods',
    icon: (className: string) => <MdOutlinePayment className={className} />,
    withUnderline: false,
  },
  {
    id: 6,
    path: '/address',
    text: 'Address',
    icon: (className: string) => (
      <MdOutlineLocalShipping className={className} />
    ),
    withUnderline: true,
  },
];

export default menuData;
