import { CategoryType } from '../types';
import { Pill, Stamp as Vitamin, ChevronFirst as FirstAid, Stethoscope, HeartPulse, AlignLeft } from 'lucide-react';

export const categories: CategoryType[] = [
  {
    id: 'all',
    name: 'Todos los Productos',
    icon: 'AlignLeft'
  },
  {
    id: 'Analgésicos',
    name: 'Analgésicos',
    icon: 'Pill'
  },
  {
    id: 'Vitaminas',
    name: 'Vitaminas',
    icon: 'Vitamin'
  },
  {
    id: 'Primeros Auxilios',
    name: 'Primeros Auxilios',
    icon: 'FirstAid'
  },
  {
    id: 'Equipo Médico',
    name: 'Equipo Médico',
    icon: 'Stethoscope'
  },
  {
    id: 'Suplementos',
    name: 'Suplementos',
    icon: 'HeartPulse'
  },
  {
    id: 'Alergias',
    name: 'Alergias',
    icon: 'Pill'
  }
];