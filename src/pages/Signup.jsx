import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Code } from 'lucide-react';

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-navy skew-y-[5deg] origin-bottom-right -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-orange opacity-10 rounded-full blur-3xl -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
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
                  <h2 className="font-display text-3xl font-bold text-navy mb-2">Create an Account</h2>
                  <p className="text-ink-soft text-sm">Join CodePath and launch your tech career today.</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Full Name</label>
                    <input type="text" id="name" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none" placeholder="Jane Doe" />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Email Address</label>
                    <input type="email" id="email" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none" placeholder="jane@example.com" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="password" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Password</label>
                      <input type="password" id="password" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none" placeholder="••••••••" />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Confirm</label>
                      <input type="password" id="confirmPassword" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none" placeholder="••••••••" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="track" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Interested Track</label>
                    <div className="relative">
                      <select id="track" required defaultValue="" className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none appearance-none cursor-pointer">
                        <option value="" disabled>Select a track</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="data">Data Science</option>
                        <option value="aiml">AI/ML</option>
                        <option value="cyber">Cyber Security</option>
                        <option value="cloud">Cloud Computing</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink-soft">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-indigo hover:bg-indigo-light text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(67,56,202,0.39)] hover:shadow-[0_6px_20px_rgba(67,56,202,0.23)] hover:-translate-y-0.5 mt-6 flex justify-center items-center gap-2">
                    Create Account <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-8 text-center text-sm text-ink-soft">
                  Already have an account?{' '}
                  <Link to="/login" className="text-indigo font-semibold hover:text-indigo-light transition-colors">
                    Sign in
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
                <h2 className="font-display text-2xl font-bold text-navy mb-3">Account Created!</h2>
                <p className="text-ink-soft mb-8 text-sm">
                  Connect this to a real auth provider later. Welcome to CodePath!
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 border-2 border-border text-navy font-semibold rounded-xl hover:bg-bg-alt transition-colors text-sm"
                >
                  Create Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
