import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover opacity-10"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Tu Salud, Nuestra Prioridad
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Encuentra todos tus productos de salud en un solo lugar. Medicamentos, suplementos y equipos de calidad entregados en tu puerta.
          </p>
          
          <form onSubmit={handleSubmit} className="relative max-w-lg">
            <input
              type="text"
              placeholder="Buscar medicamentos, vitaminas, primeros auxilios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 p-1.5 text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <Search className="h-6 w-6" />
            </button>
          </form>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center">
              <div className="mr-3 bg-blue-500 rounded-full p-2">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Entrega Rápida</h3>
                <p className="text-sm text-blue-100">En 24-48 horas</p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center">
              <div className="mr-3 bg-blue-500 rounded-full p-2">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Productos Genuinos</h3>
                <p className="text-sm text-blue-100">100% auténticos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;