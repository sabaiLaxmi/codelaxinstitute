import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-navy border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="font-display font-bold text-2xl tracking-tight text-white">Code<span className="text-orange">Path</span></span>
            </Link>
            <p className="text-ink-soft mb-6 text-gray-400">
              Empowering the next generation of software engineers through immersive, career-focused education.
            </p>
            <SocialIcons variant="light" />
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><Link to="/courses/frontend" className="inline-block text-sm text-gray-400 hover:text-white active:scale-95 active:text-orange transition-all">Full-Stack Development</Link></li>
              <li><Link to="/courses/data" className="inline-block text-sm text-gray-400 hover:text-white active:scale-95 active:text-orange transition-all">Data Science</Link></li>
              <li><Link to="/courses/uiux" className="inline-block text-sm text-gray-400 hover:text-white active:scale-95 active:text-orange transition-all">UI/UX Design</Link></li>
              <li><Link to="/courses/cyber" className="inline-block text-sm text-gray-400 hover:text-white active:scale-95 active:text-orange transition-all">Cybersecurity</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="inline-block text-sm text-gray-400 hover:text-white active:scale-95 active:text-orange transition-all">About Us</Link></li>
              <li><Link to="/careers" className="inline-block text-sm text-gray-400 hover:text-white active:scale-95 active:text-orange transition-all">Careers</Link></li>
              <li><Link to="/contact" className="inline-block text-sm text-gray-400 hover:text-white active:scale-95 active:text-orange transition-all">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest news and articles to your inbox every month.</p>
            <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
              <div className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full min-w-0 px-4 py-2 text-sm text-white placeholder-gray-500 bg-[#0A0C1B] border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo focus:border-indigo"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 px-4 py-2 text-sm font-medium text-white bg-indigo border border-transparent rounded-r-md hover:bg-indigo-light focus:outline-none transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <span className="text-green-500 text-sm font-medium">Successfully subscribed!</span>
              )}
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} CodePath Institute. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="inline-block text-sm text-gray-500 hover:text-gray-300 active:scale-95 active:text-orange transition-all">Privacy Policy</Link>
            <Link to="/terms" className="inline-block text-sm text-gray-500 hover:text-gray-300 active:scale-95 active:text-orange transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
