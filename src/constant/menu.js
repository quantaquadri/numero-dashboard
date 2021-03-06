import {
  Home,
  File,
  Headphones,
  CreditCard,
  BarChart,
  BarChart2,
  Settings,
  ArrowDownCircle,
  RefreshCw,
  BookOpen,
  Book,
  Upload,
} from 'react-feather';

export const MENUITEMS = [
  {
    title: 'Dashboard',
    icon: Home,
    type: 'link',
    badgeType: 'primary',
    active: false,
    // children: [{ path: '/dashboard/default', title: 'Default', type: 'link' }],
  },
  {
    title: 'Transactions',
    icon: BarChart2,
    type: 'link',
    badgeType: 'primary',
    active: false,
    // children: [{ path: '/dashboard/default', title: 'Default', type: 'link' }],
  },
  {
    title: 'Wallet',
    icon: CreditCard,
    type: 'link',
    badgeType: 'primary',
    active: false,
    // children: [{ path: '/dashboard/default', title: 'Default', type: 'link' }],
  },
  {
    title: 'Transfers',
    icon: RefreshCw,
    type: 'link',
    badgeType: 'primary',
    active: false,
    // children: [{ path: '/dashboard/default', title: 'Default', type: 'link' }],
  },
  {
    title: 'Invoice',
    path: '/dashboard/default',
    icon: BookOpen,
    type: 'link',
    badgeType: 'primary',
    active: false,
    // children: [{ path: '/dashboard/default', title: 'Default', type: 'link' }],
  },
  {
    title: 'Issuing',
    icon: Upload,
    type: 'link',
    badgeType: 'primary',
    active: false,
    // children: [{ path: '/dashboard/default', title: 'Default', type: 'link' }],
  },
  {
    title: 'Settings',
    icon: Settings,
    type: 'link',
    badgeType: 'primary',
    active: false,
    // children: [{ path: '/dashboard/default', title: 'Default', type: 'link' }],
  },
  {
    title: 'Api Docs',
    icon: File,
    type: 'link',
    badgeType: 'primary',
    active: false,
    // children: [{ path: '/dashboard/default', title: 'Default', type: 'link' }],
  },
];
