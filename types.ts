// Animal, Organizacja, Aktualności, Zbiórka, Wolontariat, Wiadomości, Personel

export type Animal = {
  id: number;
  name: string;
  species: 'dog' | 'cat';
  imageUrl: string;
  gender: 'male' | 'female';
  age: number;
  chipNumber: string;
  organization: string;
  phoneNumber: string;
  description: string;
  city?: string;
  status?: 'adoption' | 'lost' | 'found';
  dateOfAdmission?: string;
};
