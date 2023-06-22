interface FooterMenuLink {
  id: number;
  path: string;
  text: string;
}

interface FooterMenuItem {
  id: number;
  title: string;
  links: FooterMenuLink[];
}

const footerMenu: FooterMenuItem[] = [
  {
    id: 1,
    title: 'Shop',
    links: [
      {
        id: 1,
        path: '/shop',
        text: 'All Collections',
      },
      {
        id: 2,
        path: '/shop',
        text: 'Winter Edition',
      },
      {
        id: 3,
        path: '/shop',
        text: 'Discount',
      },
    ],
  },
  {
    id: 2,
    title: 'Company',
    links: [
      {
        id: 1,
        path: '/about',
        text: 'About Us',
      },
      {
        id: 2,
        path: '/contact',
        text: 'Contact',
      },
      {
        id: 3,
        path: '/affiliates',
        text: 'Affiliates',
      },
    ],
  },
  {
    id: 3,
    title: 'Support',
    links: [
      {
        id: 1,
        path: '/faq',
        text: 'FAQs',
      },
      {
        id: 2,
        path: '/policy',
        text: 'Cookie Policy',
      },
      {
        id: 3,
        path: '/terms',
        text: 'Terms of Use',
      },
    ],
  },
];

export default footerMenu;
