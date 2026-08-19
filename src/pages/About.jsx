import { motion } from 'framer-motion';
import { Monitor, Server, Palette, Megaphone, Users, Briefcase } from 'lucide-react';

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

const About = () => {
  const services = [
    { title: "Frontend Development", icon: <Monitor className="w-8 h-8 text-indigo" />, desc: "Master modern UI construction using React, modern CSS, and performant web APIs." },
    { title: "Backend Development", icon: <Server className="w-8 h-8 text-orange" />, desc: "Build robust databases, scalable architecture, and secure server-side applications." },
    { title: "UI/UX Design", icon: <Palette className="w-8 h-8 text-indigo-light" />, desc: "Learn user research, wireframing, and high-fidelity prototyping using Figma." },
    { title: "Digital Marketing", icon: <Megaphone className="w-8 h-8 text-blue-500" />, desc: "Drive growth with data-driven SEO, content strategies, and ad campaigns." },
    { title: "1:1 Mentorship", icon: <Users className="w-8 h-8 text-emerald-500" />, desc: "Get personalized guidance from senior engineers working at top tech companies." },
    { title: "Placement Support", icon: <Briefcase className="w-8 h-8 text-red-500" />, desc: "Resume polishing, mock interviews, and direct referrals to our hiring network." }
  ];

  return (
    <div className="bg-bg min-h-screen pt-24 pb-20">
      {/* 1. Hero Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <Reveal>
          <p className="font-mono text-orange text-sm uppercase tracking-wider mb-4">Our Mission</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
            Democratizing <span className="text-indigo">Technical Excellence</span>
          </h1>
          <p className="text-xl text-ink-soft leading-relaxed max-w-3xl mx-auto">
            CodePath was founded on a simple belief: world-class engineering education shouldn't be gated by traditional degrees. We build software engineers ready to tackle the hardest problems in tech, regardless of their background.
          </p>
        </Reveal>
      </section>

      {/* 2. Mission Section Photo + Copy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="rounded-[24px] overflow-hidden shadow-2xl border border-border">
              {/* Landscape Image 1 */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Students collaborating on code at laptops in a modern tech classroom" 
                loading="lazy"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Built by Engineers, for the Future</h2>
              <p className="text-lg text-ink-soft mb-6 leading-relaxed">
                The tech landscape evolves rapidly, and traditional curriculums struggle to keep pace. We noticed a gap between what bootcamps were teaching and what leading companies actually needed.
              </p>
              <p className="text-lg text-ink-soft leading-relaxed">
                That's why our philosophy centers on <strong>project-based learning</strong>. You won't just watch lectures; you'll build robust, deployed applications, solve real architectural challenges, and learn the collaboration skills necessary to thrive in a professional engineering team.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Campus/Classroom Gallery */}
      <section className="bg-navy py-24 relative overflow-hidden mb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-white mb-4">Our Environment</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Immerse yourself in a culture of continuous learning, deep focus, and peer collaboration.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
            <Reveal delay={0.1} className="h-full">
              <div className="w-full h-full rounded-[18px] overflow-hidden shadow-xl group">
                {/* Image 2 */}
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
                  alt="Instructor teaching computer science concepts on a whiteboard" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2} className="h-full">
              <div className="w-full h-full rounded-[18px] overflow-hidden shadow-xl group">
                {/* Image 3 */}
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" 
                  alt="Tech team working together during a hackathon event" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3} className="h-full">
              <div className="w-full h-full rounded-[18px] overflow-hidden shadow-xl group">
                {/* Image 4 */}
                <img 
                  src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80" 
                  alt="Student presenting a technical project on screen" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-mono text-orange text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="font-display text-4xl font-bold text-navy mb-4">Our Core Expertise</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-[18px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-shadow h-full flex flex-col">
                <div className="bg-bg-alt w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-ink-soft leading-relaxed flex-grow">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
