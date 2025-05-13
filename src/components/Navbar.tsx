
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scan, Home, Info, Contact } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Scan size={24} className="text-primary" />
            <span className="font-bold text-xl">DeepfakeDetect</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 ${isActive('/') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/scanner" 
              className={`flex items-center space-x-1 ${isActive('/scanner') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              <Scan size={18} />
              <span>Scanner</span>
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center space-x-1 ${isActive('/about') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              <Info size={18} />
              <span>About</span>
            </Link>
            <Link 
              to="/contact" 
              className={`flex items-center space-x-1 ${isActive('/contact') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              <Contact size={18} />
              <span>Contact</span>
            </Link>
          </nav>
          
          <div className="flex md:hidden">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
