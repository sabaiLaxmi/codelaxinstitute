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

const TermsOfService = () => {
  return (
    <div className="bg-bg min-h-screen pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-ink-soft">Effective Date: August 2026</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80" 
            alt="Legal Terms Document" 
            className="w-full h-64 object-cover rounded-[24px] shadow-lg mb-12"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-xl border border-border prose prose-indigo max-w-none text-ink-soft">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using the CodePath Institute platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4">2. Educational Content & Licensing</h2>
            <p className="mb-6">
              All course materials, videos, and projects provided are the intellectual property of CodePath Institute. You are granted a limited, non-exclusive, non-transferable license to access and view the content solely for your personal, non-commercial educational purposes.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4">3. User Conduct</h2>
            <p className="mb-6">
              You agree to use the platform in a professional manner. Academic dishonesty, harassment of instructors or peers, or sharing of account credentials will result in immediate termination of your access without refund.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mb-4">4. Limitation of Liability</h2>
            <p>
              CodePath Institute shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default TermsOfService;
