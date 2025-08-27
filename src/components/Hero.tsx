import React from 'react';
import { Leaf, Award, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Aceites Premium
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Los mejores aceites del mundo, directamente a tu mesa
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Explorar Productos
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
            <p className="opacity-90">Aceites puros sin aditivos artificiales</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
            <p className="opacity-90">Seleccionados por expertos gastronómicos</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Envío Rápido</h3>
            <p className="opacity-90">Entrega en 24-48 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
};