export interface PetDetail {
  icon: string; // FontAwesome class
  label: string;
  value: string;
  isImportant?: boolean;
}

export interface ContactPerson {
  role: string;
  phone: string;
  social: string;
}

export interface PetProfileData {
  name: string;
  subtitle: string;
  imageUrl: string;
  details: PetDetail[];
  quote: string;
  footer: string;
}