import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem('codepath_loggedIn') === 'true');
    };
    checkAuth();
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('codepath_loggedIn');
    window.dispatchEvent(new Event('authChange'));
  };

  const getDesktopLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `font-medium text-sm tracking-wide transition-colors ${
      isActive 
        ? 'text-white border-b-2 border-white pb-1' 
        : 'text-gray-300 hover:text-white pb-1 border-b-2 border-transparent hover:border-gray-500'
    }`;
  };

  const getMobileLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
      isActive 
        ? 'text-white bg-gray-800 border-l-4 border-white pl-2' 
        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
    }`;
  };

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
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={getDesktopLinkClass('/')}>Home</Link>
            <Link to="/about" className={getDesktopLinkClass('/about')}>About</Link>
            <Link to="/courses" className={getDesktopLinkClass('/courses')}>Courses</Link>
            <Link to="/quiz" className={getDesktopLinkClass('/quiz')}>Quiz</Link>
            <Link to="/contact" className={getDesktopLinkClass('/contact')}>Contact</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout} 
                  className="bg-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium text-sm transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="text-gray-300 hover:text-white font-medium text-sm border border-gray-600 hover:border-gray-400 px-5 py-2 rounded-full transition-all">
                    Login
                  </Link>
                  <Link to="/signup" className="bg-indigo hover:bg-indigo-light text-white px-6 py-2 rounded-full font-medium text-sm transition-all shadow-[0_0_15px_rgba(67,56,202,0.4)]">
                    Sign Up
                  </Link>
                </>
              )}
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
              <Link to="/" className={getMobileLinkClass('/')}>Home</Link>
              <Link to="/about" className={getMobileLinkClass('/about')}>About</Link>
              <Link to="/courses" className={getMobileLinkClass('/courses')}>Courses</Link>
              <Link to="/quiz" className={getMobileLinkClass('/quiz')}>Quiz</Link>
              <Link to="/contact" className={getMobileLinkClass('/contact')}>Contact</Link>
            </div>
            <div className="pt-4 border-t border-gray-800 flex flex-col space-y-3">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="block w-full text-center px-4 py-3 bg-orange hover:bg-orange-600 text-white font-medium rounded-xl shadow-lg transition-colors">Logout</button>
              ) : (
                <>
                  <Link to="/login" className="block w-full text-center px-4 py-3 border border-gray-600 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">Login</Link>
                  <Link to="/signup" className="block w-full text-center px-4 py-3 bg-indigo text-white font-medium rounded-xl shadow-lg transition-colors">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
