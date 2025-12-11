import { PetProfileData, ContactPerson } from './types';

export const PET_DATA: PetProfileData = {
  name: "Luna",
  subtitle: "IDENTIFICACIÓN OFICIAL",
  // Using a placeholder that looks like a black dog/mix
  imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop", 
  details: [
    { icon: "fa-solid fa-dog", label: "Especie", value: "Perro" },
    { icon: "fa-solid fa-dna", label: "Raza", value: "Beagle mixto" },
    { icon: "fa-solid fa-venus", label: "Sexo", value: "Hembra" },
    { icon: "fa-regular fa-calendar", label: "Edad", value: "3 años" },
    { icon: "fa-solid fa-heart", label: "Comportamiento", value: "Juguetona y amigable" },
    { icon: "fa-solid fa-heart-pulse", label: "Salud", value: "Dermatitis atópica" },
    { icon: "fa-solid fa-shield-dog", label: "Cuidados Especiales", value: "Baños con shampoo hipoalergénico, evitar pasto seco, usar crema hidratante veterinaria" },
    { icon: "fa-solid fa-triangle-exclamation", label: "Nota Importante", value: "No darle pollo crudo", isImportant: true },
  ],
  quote: "Hola, soy Luna. A veces respondo al apodo de Reina. Me encanta jugar y a veces corro detrás de cosas sin darme cuenta de que me alejo de mi familia. Cuando los pierdo de vista no sé bien cómo volver... Si me encontraste, por favor llama a mi familia. ¡Muchas gracias!",
  footer: "ANTORA PREMIUM ID SYSTEM"
};

export const CONTACTS: ContactPerson[] = [
  {
    role: "Contactar a mamá",
    phone: "+569 12345678",
    social: "@Textodeejemplo"
  },
  {
    role: "Contactar a papá",
    phone: "+569 87654321",
    social: "@Textodeejemplo"
  }
];