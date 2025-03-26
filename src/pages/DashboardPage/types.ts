export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pets: string;
  joinDate: string;
  lastActivityDate: string;
  activeRewards: number;
  activeStars: number;
  isNew?: boolean;
}

export interface IPet {
  id: string;
  ownerFirstName: string;
  ownerLastName: string;
  petName: string;
  issueDate: string;
  expiryDate: string;
  size: string;
  startsStatus?: string;
  rewordsStatus?: string;
  status?: string;
}
