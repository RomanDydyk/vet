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
  status?: string;
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

export type IActivityData = {
  id: string;
  status: string;
  petName: string;
  product: string;
  issueDate: string;
  expiryDate: string;
  size: string;
};

export type IRewardsData = {
  id: string;
  status: string;
  petName: string;
  product: string;
  issueDate: string;
  redeemedDate: string;
  expiryDate: string;
  size: string;
  wholesaler: string;
  deliveryNote: string;
  dnIssueDate: string;
};
