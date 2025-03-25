import { ICustomer } from './types';

export const customersData: ICustomer[] = [
  {
    firstName: 'Luis',
    lastName: 'Smith',
    email: 'luis@gmail.com',
    phone: '123456789',
    pets: 2,
    joinDate: '01/09/24',
    lastActivityDate: '01/09/24',
    activeRewards: 0,
    activeStars: 2,
    isNew: true,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'email@gmail.com',
    phone: '123456789',
    pets: 1,
    joinDate: '01/09/24',
    lastActivityDate: '01/09/24',
    activeRewards: 0,
    activeStars: 2,
    isNew: true,
  },
  // ... можна додати більше мок-даних за таким же форматом
];
