export type Organization = {
  id: number;
  name: string;
  logoUrl?: string;
  phoneNumber?: string;
  description?: string;
  city?: string;
};

export const organizations: Organization[] = [
  {
    id: 1,
    name: 'Tech Innovators',
    logoUrl: '/animals/cat-2.jpg',
    phoneNumber: '+48 123 456 789',
    description: 'Firma specjalizująca się w nowoczesnych technologiach.',
    city: 'Warszawa',
  },
  {
    id: 2,
    name: 'Green Solutions',
    logoUrl: '/animals/cat-1.jpg',
    phoneNumber: '+48 987 654 321',
    description: 'Ekologiczne rozwiązania dla przemysłu.',
    city: 'Kraków',
  },
  {
    id: 3,
    name: 'HealthCare Plus',
    logoUrl: '/animals/cat-1.jpg',
    phoneNumber: '+48 555 666 777',
    description: 'Dostarczamy innowacyjne rozwiązania medyczne.',
    city: 'Wrocław',
  },
  {
    id: 4,
    name: 'EduSmart',
    logoUrl: '/animals/dog-2.jpg',
    city: 'Gdańsk',
  },
  {
    id: 5,
    name: 'BuildIt',
    logoUrl: '/animals/dog-1.jpg',
    phoneNumber: '+48 222 333 444',
    description: 'Firma budowlana z wieloletnim doświadczeniem.',
    city: 'Poznań',
  },
  {
    id: 6,
    name: 'Foodies Hub',
    logoUrl: '/animals/cat-1.jpg',
    phoneNumber: '+48 777 888 999',
    description: 'Sieć restauracji oferująca kuchnię międzynarodową.',
  },
  {
    id: 7,
    name: 'FinTech Dynamics',
    logoUrl: '/animals/cat-1.jpg',
    city: 'Warszawa',
  },
  {
    id: 8,
    name: 'Creative Minds',
    phoneNumber: '+48 444 555 666',
    logoUrl: '/animals/cat-1.jpg',
    description: 'Agencja kreatywna zajmująca się brandingiem.',
    city: 'Łódź',
  },
  {
    id: 9,
    name: 'LogiTrans',
    logoUrl: '/animals/cat-1.jpg',
    description: 'Transport i logistyka na najwyższym poziomie.',
    city: 'Szczecin',
  },
  {
    id: 10,
    name: 'Smart Energy',
    logoUrl: '/animals/cat-1.jpg',
    phoneNumber: '+48 111 222 333',
    city: 'Lublin',
  },
];
