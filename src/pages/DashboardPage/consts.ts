import {
  PetOwners,
  Star,
  Reward,
  RewardCheck,
} from '../../assets/icons/dasboard';

export const statsData = [
  {
    number: '344',
    label: 'Pet owner joins',
    color: 'var(--primary-color)',
    backgroundColor: '#EDE8F0',
    icon: PetOwners,
  },
  {
    number: '1208',
    label: 'Stars earned',
    color: 'var(--green-color)',
    backgroundColor: '#E5F6F4',
    icon: Star,
  },
  {
    number: '210',
    label: 'Rewards issued',
    color: 'var(--green-color)',
    backgroundColor: '#E5F6F4',
    icon: Reward,
  },
  {
    number: '61',
    label: 'Rewards redeemed',
    color: 'var(--blue-color)',
    backgroundColor: '#E6F5FB',
    icon: RewardCheck,
  },
];

export const tabsArray = ['Pet Owner Joins', 'Stars', 'Rewards'];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const chartData = {
  'Pet Owner Joins': [
    { month: 'Jan', value: 10 },
    { month: 'Feb', value: 18 },
    { month: 'Mar', value: 20 },
    { month: 'Apr', value: 30 },
    { month: 'May', value: 25 },
    { month: 'Jun', value: 32 },
    { month: 'Jul', value: 10 },
    { month: 'Aug', value: 18 },
    { month: 'Sep', value: 20 },
    { month: 'Oct', value: 30 },
    { month: 'Nov', value: 25 },
    { month: 'Dec', value: 32 },
  ],
  Stars: [
    { month: 'Jan', value: 15 },
    { month: 'Feb', value: 22 },
    { month: 'Mar', value: 28 },
    { month: 'Apr', value: 35 },
    { month: 'May', value: 30 },
    { month: 'Jun', value: 25 },
    { month: 'Jul', value: 15 },
    { month: 'Aug', value: 22 },
    { month: 'Sep', value: 28 },
    { month: 'Oct', value: 35 },
    { month: 'Nov', value: 30 },
    { month: 'Dec', value: 25 },
  ],
  Rewards: [
    { month: 'Jan', value: 5 },
    { month: 'Feb', value: 12 },
    { month: 'Mar', value: 18 },
    { month: 'Apr', value: 24 },
    { month: 'May', value: 30 },
    { month: 'Jun', value: 36 },
    { month: 'Jul', value: 18 },
    { month: 'Aug', value: 24 },
    { month: 'Sep', value: 30 },
    { month: 'Oct', value: 25 },
    { month: 'Nov', value: 20 },
    { month: 'Dec', value: 28 },
  ],
};
