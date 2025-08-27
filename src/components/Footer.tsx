import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AceitesPremium</h3>
            <p className="text-gray-300 mb-4">
              Tu tienda de confianza para los mejores aceites gourmet del mundo.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Aceite de Oliva</a></li>
              <li><a href="#" className="hover:text-white">Aceite de Coco</a></li>
              <li><a href="#" className="hover:text-white">Aceite de Aguacate</a></li>
              <li><a href="#" className="hover:text-white">Aceites Gourmet</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white">Envíos</a></li>
              <li><a href="#" className="hover:text-white">Devoluciones</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@aceitespremium.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Calle Principal, Ciudad</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 AceitesPremium. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};