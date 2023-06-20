import { AiOutlineDollar } from 'react-icons/ai';
import { BiHappyBeaming } from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';
import { MdOutlineLocalShipping } from 'react-icons/md';

interface ExperincesDataItem {
  id: number;
  title: string;
  text: string;
  icon: (className: string) => React.ReactNode;
}

const experiencesData: ExperincesDataItem[] = [
  {
    id: 1,
    title: 'Original Products',
    text: 'We provide money back guarantee if the product are not original',
    icon: (className: string) => <AiOutlineDollar className={className} />,
  },
  {
    id: 2,
    title: 'Satisfaction Guarantee',
    text: "Exchange the product you've purchased if it doesn't fit on you",
    icon: (className: string) => <BiHappyBeaming className={className} />,
  },
  {
    id: 3,
    title: 'New Arrival Everyday',
    text: 'We update out collections almost everyday',
    icon: (className: string) => <FiPackage className={className} />,
  },
  {
    id: 4,
    title: 'Fast & Free Shipping',
    text: 'We offer fast and free shipping for our loyal customers',
    icon: (className: string) => (
      <MdOutlineLocalShipping className={className} />
    ),
  },
];

export default experiencesData;
