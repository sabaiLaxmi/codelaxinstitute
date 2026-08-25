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

const Careers = () => {
  return (
    <div className="bg-bg min-h-screen pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Reveal>
          <p className="font-mono text-orange text-sm uppercase tracking-wider mb-4">Join Our Team</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
            Careers at <span className="text-indigo">CodePath</span>
          </h1>
          <p className="text-xl text-ink-soft leading-relaxed max-w-3xl mx-auto mb-10">
            Help us democratize technical excellence and build the next generation of software engineers.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
            alt="Team collaboration" 
            className="w-full h-96 object-cover rounded-[24px] shadow-2xl mb-16"
          />
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal delay={0.2}>
          <h2 className="font-display text-3xl font-bold text-navy mb-8">Open Positions</h2>
          <div className="space-y-6">
            {[
              { role: "Senior Frontend Engineer", location: "Remote", type: "Full-time" },
              { role: "Technical Curriculum Developer", location: "New York / Remote", type: "Full-time" },
              { role: "Student Success Manager", location: "Remote", type: "Full-time" }
            ].map((job, idx) => (
              <div key={idx} className="bg-white rounded-[18px] p-6 shadow-md border border-border flex justify-between items-center hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="font-bold text-xl text-navy">{job.role}</h3>
                  <p className="text-ink-soft mt-1">{job.location} &bull; {job.type}</p>
                </div>
                <button className="px-6 py-2 bg-indigo text-white rounded-md hover:bg-indigo-light transition-colors font-medium">
                  Apply
                </button>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Careers;
