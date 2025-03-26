import { Star } from '../../assets/icons/dasboard';
import ErrorStar from '../../assets/icons/table/ErrorStar';

export const activityData = [
  {
    number: '13',
    label: 'Total stars',
    color: 'var(--primary-color)',
    backgroundColor: '#EDE8F0',
    icon: Star,
  },
  {
    number: '0',
    color: 'var(--green-color)',
    label: 'Current stars',
    backgroundColor: '#E5F6F4',
    icon: Star,
  },
  {
    number: '1',
    label: 'Total rewards',
    color: '#EF4166',
    backgroundColor: '#FDECF0',
    icon: ErrorStar,
  },
];
