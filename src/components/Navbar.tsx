import { Link, useLocation } from 'react-router-dom';
import { Scale } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-amber-600" : "text-gray-200 hover:text-amber-600";
  };

  return (
    <nav className="bg-[#2A0A0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 text-gray-700" />
              <span className="ml-2 text-xl font-serif text-gray-200">RENATA ANDRADE</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
              Início
            </Link>
            <Link to="/sobre" className={`${isActive('/sobre')} transition-colors duration-200 font-medium`}>
              Sobre
            </Link>
            <Link to="/contato" className={`${isActive('/contato')} transition-colors duration-200 font-medium`}>
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;