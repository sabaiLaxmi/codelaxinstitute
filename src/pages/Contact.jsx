import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable reveal wrapper
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate network request
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-bg min-h-screen pt-24 pb-20">
      
      {/* Hero Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Reveal>
          <p className="font-mono text-orange text-sm uppercase tracking-wider mb-4">Admissions</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
            Start Your <span className="text-indigo">Journey</span>
          </h1>
          <p className="text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto">
            Ready to accelerate your career? Our admissions team is here to answer your questions and help you choose the right track.
          </p>
        </Reveal>
      </section>

      {/* Two Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-[24px] border border-border shadow-xl p-8 md:p-12 relative overflow-hidden min-h-[600px]">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <h2 className="font-display text-3xl font-bold text-navy mb-8">Application Form</h2>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">First Name</label>
                          <input type="text" id="firstName" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none" placeholder="Jane" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Last Name</label>
                          <input type="text" id="lastName" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Email Address</label>
                        <input type="email" id="email" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none" placeholder="jane@example.com" />
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
                      
                      <div>
                        <label htmlFor="message" className="font-mono block text-xs uppercase text-ink-soft font-semibold mb-2">Message</label>
                        <textarea id="message" rows="5" required className="w-full bg-bg-alt text-ink px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-indigo focus:border-transparent transition-all outline-none resize-none" placeholder="Tell us about your background and career goals..."></textarea>
                      </div>
                      
                      <button type="submit" className="w-full bg-indigo hover:bg-indigo-light text-white font-bold py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(67,56,202,0.3)] hover:shadow-[0_10px_25px_rgba(67,56,202,0.4)] hover:-translate-y-1 flex justify-center items-center gap-2">
                        Submit Application <Send className="w-5 h-5" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: 'spring' }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white"
                    >
                      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                      </div>
                      <h2 className="font-display text-4xl font-bold text-navy mb-4">Application Received!</h2>
                      <p className="text-lg text-ink-soft mb-8 max-w-md">
                        Thank you for your interest in CodePath. Our admissions team will review your application and contact you within 24-48 hours.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="px-8 py-3 border-2 border-border text-navy font-semibold rounded-xl hover:bg-bg-alt transition-colors"
                      >
                        Submit Another
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Info Card */}
          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <div className="bg-navy rounded-[24px] border border-gray-800 shadow-2xl overflow-hidden flex flex-col h-full">
                
                {/* Contact Info */}
                <div className="p-8 md:p-10 relative">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo rounded-full opacity-20 blur-3xl -mr-20 -mt-20 pointer-events-none" />
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-8 relative z-10">Contact Information</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="bg-navy-2 p-3 rounded-xl border border-gray-800 shrink-0">
                        <MapPin className="w-6 h-6 text-orange" />
                      </div>
                      <div>
                        <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">Headquarters</h4>
                        <p className="text-gray-200">123 Tech Boulevard<br />San Francisco, CA 94105</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-navy-2 p-3 rounded-xl border border-gray-800 shrink-0">
                        <Phone className="w-6 h-6 text-orange" />
                      </div>
                      <div>
                        <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                        <p className="text-gray-200">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-navy-2 p-3 rounded-xl border border-gray-800 shrink-0">
                        <Mail className="w-6 h-6 text-orange" />
                      </div>
                      <div>
                        <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                        <p className="text-gray-200">admissions@codepath.edu</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-navy-2 p-3 rounded-xl border border-gray-800 shrink-0">
                        <Clock className="w-6 h-6 text-orange" />
                      </div>
                      <div>
                        <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">Office Hours</h4>
                        <p className="text-gray-200">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
