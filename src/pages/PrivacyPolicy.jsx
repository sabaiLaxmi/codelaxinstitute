import { motion } from 'framer-motion';

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

const PrivacyPolicy = () => {
  return (
    <div className="bg-bg min-h-screen pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-ink-soft">Last updated: August 2026</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" 
            alt="Data Privacy Lock" 
            className="w-full h-64 object-cover rounded-[24px] shadow-lg mb-12"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-xl border border-border prose prose-indigo max-w-none text-ink-soft">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us when you create an account, enroll in a course, or communicate with us. This may include your name, email address, payment information, and educational background.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to provide, maintain, and improve our educational services, to process transactions, to send you technical notices and support messages, and to communicate with you about products, services, offers, and events.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4">3. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect the security of your personal information against unauthorized access, loss, or alteration. We use industry-standard encryption for data transmission and storage.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@codepath.institute.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
