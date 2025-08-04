export type User = {
  id: number;
  fullName: string;
  avatarUrl?: string;
  phoneNumber?: string;
  city?: string;
  organizationId?: number;
};

export type Organization = {
  id: number;
  name: string;
  logoUrl?: string;
  phoneNumber?: string;
  description?: string;
  city?: string;
};

export type OwnerType = 'user' | 'organization';

export type ContentOwner = {
  ownerId: number;
  ownerType: OwnerType;
};

export type Animal = {
  id: number;
  name: string;
  species: 'dog' | 'cat' | 'other';
  imageUrl?: string;
  gender: 'male' | 'female' | 'unknown';
  age: number;
  chipNumber?: string;
  description?: string;
  city: string;
  status: 'adoption' | 'lost' | 'found';
  dateOfAdmission: string;
  sterilized: boolean;
} & ContentOwner;

export type News = {
  id: number;
  title: string;
  imageUrl?: string;
  description: string;
  date: string;
} & ContentOwner;

export type Fundraise = {
  id: number;
  title: string;
  imageUrl?: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
  deadline: string;
} & ContentOwner;

export type Volunteering = {
  id: number;
  title: string;
  imageUrl?: string;
  description: string;
  eventDate: string;
  location: string;
} & ContentOwner;

export type Message = {
  id: number;
  senderId: number;
  senderType: OwnerType;
  receiverId: number;
  receiverType: OwnerType;
  content: string;
  sentAt: string;
};
