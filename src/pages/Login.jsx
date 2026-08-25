import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Code, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const existingUsers = JSON.parse(localStorage.getItem('codepath_users')) || [];
    const user = existingUsers.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('codepath_loggedIn', 'true');
      window.dispatchEvent(new Event('authChange'));
      setIsSubmitted(true);
      setTimeout(() => navigate('/'), 1500);
    } else {
      setError("Invalid email or password. Please create an account first.");
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-navy skew-y-[-5deg] origin-top-left -z-10" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo opacity-20 rounded-full blur-3xl -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-[24px] shadow-2xl border border-border p-8 md:p-10 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bg-alt text-indigo mb-4">
                    <Code className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-navy mb-2">Welcome Back</h2>
                  <p className="text-ink-soft text-sm">Sign in to access your learning dashboard.</p>
                </div>

                {error && <div className="mb-6 p-3 bg-red-100 text-red-700 text-sm rounded-lg text-center font-medium border border-red-200">{error}</div>}

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Email Address</label>
                    <input type="email" id="email" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none" placeholder="you@example.com" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="password" className="font-mono block text-xs uppercase text-ink-soft font-semibold">Password</label>
                      <a href="#" className="text-sm text-indigo hover:text-indigo-light font-medium transition-colors">Forgot password?</a>
                    </div>
                    <div className="relative">
                      <input type={showPassword ? "text" : "password"} id="password" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none pr-10" placeholder="••••••••" />
                      <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft hover:text-indigo transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-indigo hover:bg-indigo-light text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(67,56,202,0.39)] hover:shadow-[0_6px_20px_rgba(67,56,202,0.23)] hover:-translate-y-0.5 mt-4 flex justify-center items-center gap-2">
                    Sign In <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-8 text-center text-sm text-ink-soft">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-indigo font-semibold hover:text-indigo-light transition-colors">
                    Sign up now
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="font-display text-2xl font-bold text-navy mb-3">Login Successful!</h2>
                <p className="text-ink-soft mb-8 text-sm">
                  This is a mockup. Connect this to a real auth provider later to access the dashboard.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 border-2 border-border text-navy font-semibold rounded-xl hover:bg-bg-alt transition-colors text-sm"
                >
                  Back to Login
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
};

export default Login;
