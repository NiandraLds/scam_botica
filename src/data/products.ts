import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Analgésicos",
    price: 5.99,
    image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Analgésico y antipirético eficaz para adultos y niños.",
    dosage: "1-2 tabletas cada 4-6 horas según sea necesario, sin exceder 8 tabletas en 24 horas.",
    sideEffects: ["Náuseas", "Dolor de estómago", "Reacciones alérgicas en casos raros"],
    featured: true,
    stock: 50
  },
  {
    id: 2,
    name: "Vitamina C 1000mg",
    category: "Vitaminas",
    price: 12.50,
    image: "https://images.pexels.com/photos/163944/pexels-photo-163944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Apoya la salud del sistema inmunológico y el bienestar general.",
    dosage: "1 tableta diaria con alimentos.",
    sideEffects: ["Malestar estomacal en dosis altas", "Dolor de cabeza", "Insomnio"],
    featured: true,
    stock: 30
  },
  {
    id: 3,
    name: "Botiquín de Primeros Auxilios",
    category: "Primeros Auxilios",
    price: 24.99,
    image: "https://www.gob.mx/cms/uploads/image/file/217153/botiquin-primeros-auxilios2.jpg",
    description: "Botiquín completo para emergencias en el hogar.",
    featured: false,
    stock: 15
  },
  {
    id: 4,
    name: "Ibuprofeno 200mg",
    category: "Analgésicos",
    price: 6.49,
    image: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Antiinflamatorio para dolores de cabeza, dolores musculares y reducción de la fiebre.",
    dosage: "1-2 tabletas cada 4-6 horas con alimentos.",
    sideEffects: ["Malestar estomacal", "Acidez", "Mareos"],
    featured: false,
    stock: 45
  },
  {
    id: 5,
    name: "Termómetro Digital",
    category: "Equipo Médico",
    price: 18.95,
    image: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Lecturas de temperatura rápidas y precisas en segundos.",
    featured: true,
    stock: 20
  },
  {
    id: 6,
    name: "Omega-3 Aceite de Pescado",
    category: "Suplementos",
    price: 15.75,
    image: "https://images.pexels.com/photos/3683099/pexels-photo-3683099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Apoya la salud del corazón y la función cerebral.",
    dosage: "1 cápsula dos veces al día con las comidas.",
    sideEffects: ["Sabor a pescado", "Malestar estomacal"],
    featured: false,
    stock: 25
  },
  {
    id: 7,
    name: "Monitor de Presión Arterial",
    category: "Equipo Médico",
    price: 45.99,
    image: "https://www.tecnicaelectromedica.com/wp-content/uploads/2022/07/TANGO-A-WEB.png",
    description: "Dispositivo fácil de usar para monitorear la presión arterial en casa.",
    featured: true,
    stock: 10
  },
  {
    id: 8,
    name: "Tabletas Antihistamínicas",
    category: "Alergias",
    price: 9.99,
    image: "https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Alivio de síntomas de alergia como estornudos y picazón en los ojos.",
    dosage: "1 tableta diaria, preferiblemente por la noche.",
    sideEffects: ["Somnolencia", "Boca seca", "Visión borrosa"],
    featured: false,
    stock: 35
  }
];