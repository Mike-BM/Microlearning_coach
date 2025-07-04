import React from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LearnBot</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
            <a href="#courses" className="text-gray-600 hover:text-green-600 transition-colors">Courses</a>
            <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors">Pricing</a>
            <button
              onClick={onLogin}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            <a href="#features" className="block py-2 text-gray-600">Features</a>
            <a href="#courses" className="block py-2 text-gray-600">Courses</a>
            <a href="#pricing" className="block py-2 text-gray-600">Pricing</a>
            <button
              onClick={onLogin}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;