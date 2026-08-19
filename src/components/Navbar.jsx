import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-navy py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1">
              <span className="font-display font-bold text-2xl tracking-tight text-white">Code<span className="text-orange">Path</span></span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium text-sm tracking-wide">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium text-sm tracking-wide">About</Link>
            <Link to="/courses" className="text-gray-300 hover:text-white transition-colors font-medium text-sm tracking-wide">Courses</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors font-medium text-sm tracking-wide">Contact</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-300 hover:text-white font-medium text-sm border border-gray-600 hover:border-gray-400 px-5 py-2 rounded-full transition-all">
                Login
              </Link>
              <Link to="/signup" className="bg-indigo hover:bg-indigo-light text-white px-6 py-2 rounded-full font-medium text-sm transition-all shadow-[0_0_15px_rgba(67,56,202,0.4)]">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navy-2 border-t border-gray-800 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 rounded-lg">Home</Link>
              <Link to="/about" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 rounded-lg">About</Link>
              <Link to="/courses" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 rounded-lg">Courses</Link>
              <Link to="/contact" className="block px-3 py-3 text-base font-medium text-white hover:bg-gray-800 rounded-lg">Contact</Link>
            </div>
            <div className="pt-4 border-t border-gray-800 flex flex-col space-y-3">
              <Link to="/login" className="block w-full text-center px-4 py-3 border border-gray-600 text-white font-medium rounded-xl hover:bg-gray-800">Login</Link>
              <Link to="/signup" className="block w-full text-center px-4 py-3 bg-indigo text-white font-medium rounded-xl shadow-lg">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
