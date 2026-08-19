import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Monitor, Globe, Server, Shield, Cloud, Palette, TrendingUp, Cpu } from 'lucide-react';
import HeroBallPit from '../components/HeroBallPit';
import AnimatedCounter from '../components/AnimatedCounter';
import TestimonialSlider from '../components/TestimonialSlider';
import { useState, useEffect } from 'react';

// Reusable Typewriter component for the terminal
const Typewriter = ({ lines }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseBeforeDelete = 2500;
    const pauseBeforeType = 500;

    const line = lines[currentLineIndex];

    if (!isDeleting && currentText === line) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentLineIndex((prev) => (prev + 1) % lines.length);
      const timeout = setTimeout(() => {}, pauseBeforeType);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? line.substring(0, currentText.length - 1)
          : line.substring(0, currentText.length + 1)
      );
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentLineIndex, lines]);

  return (
    <span className="font-mono text-indigo-light">
      {currentText}
      <span className="animate-pulse ml-1 inline-block w-2 h-5 bg-orange align-middle"></span>
    </span>
  );
};

// Section Reveal Wrapper
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

const Home = () => {
  const codeLines = [
    "hire(you); // welcome aboard",
    "git commit -m 'Career accelerated'",
    "npm run success --watch",
    "SELECT * FROM opportunities WHERE skills = 'top_tier';"
  ];

  const techStack = [
    "HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Figma", "Next.js", "Python", "Docker", "AWS"
  ];

  const testimonials = [
    { name: "Sarah Jenkins", role: "Software Engineer @ Google", text: "CodePath gave me the exact skills and portfolio I needed to land my dream job. The instructors actually care about your success." },
    { name: "David Chen", role: "Frontend Developer @ Stripe", text: "I tried self-teaching for months but was stuck. The structured curriculum and project-based approach here changed everything." },
    { name: "Aisha Patel", role: "Full Stack Dev @ Startup", text: "Best investment I ever made. The career support team helped me negotiate a salary 30% higher than I expected!" }
  ];

  const featuredCourses = [
    { 
      title: "Frontend Development", 
      icon: <Monitor className="w-6 h-6 text-indigo" />, 
      desc: "Master UI/UX with React, Tailwind, and modern web APIs.",
      tags: ["React", "JavaScript", "CSS"]
    },
    { 
      title: "Backend Development", 
      icon: <Server className="w-6 h-6 text-orange" />, 
      desc: "Build scalable APIs and databases with Node and Python.",
      tags: ["Node.js", "Python", "SQL"]
    },
    { 
      title: "Cyber Security", 
      icon: <Shield className="w-6 h-6 text-red-500" />, 
      desc: "Protect networks and applications from modern threats.",
      tags: ["Security", "Network", "Linux"]
    },
    { 
      title: "Data Science", 
      icon: <Database className="w-6 h-6 text-indigo-light" />, 
      desc: "Analyze and visualize complex data structures and AI models.",
      tags: ["Python", "Pandas", "ML"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bg text-ink overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative bg-navy pt-28 pb-32 min-h-[90vh] flex items-center z-0">
        <HeroBallPit />
        <div className="absolute inset-0 bg-navy/30 pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text & CTAs */}
            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                  Launch Your Tech <span className="text-indigo-light">Career.</span>
                </h1>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Join the elite coding institute that turns ambitious beginners into industry-ready engineers through immersive, project-based learning.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link to="/courses" className="px-8 py-4 bg-indigo text-white rounded-xl font-semibold text-lg hover:bg-indigo-light transition-all shadow-[0_0_20px_rgba(67,56,202,0.4)] flex items-center justify-center gap-2">
                    Explore Courses <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/about" className="px-8 py-4 bg-navy-2 text-white border border-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all flex items-center justify-center">
                    Learn More
                  </Link>
                </div>

                {/* Hero Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
                  <div>
                    <p className="font-display text-3xl font-bold text-white"><AnimatedCounter value={5000} suffix="+" duration={2.5} /></p>
                    <p className="font-mono text-xs text-gray-400 mt-1 uppercase">Students Trained</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-white"><AnimatedCounter value={94} suffix="%" duration={2} /></p>
                    <p className="font-mono text-xs text-gray-400 mt-1 uppercase">Placement Rate</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-white"><AnimatedCounter value={250} suffix="+" duration={2.2} /></p>
                    <p className="font-mono text-xs text-gray-400 mt-1 uppercase">Hiring Partners</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Terminal */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo to-orange rounded-[20px] blur opacity-30 animate-pulse"></div>
              <div className="relative rounded-[18px] overflow-hidden shadow-2xl border border-gray-800 bg-[#0A0C1B]">
                <div className="bg-navy-2 px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="flex-1 text-center font-mono text-xs text-gray-500">
                    user@codepath: ~/career
                  </div>
                </div>
                <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-gray-300 h-[300px]">
                  <p><span className="text-pink-500">import</span> {'{'} Future {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'@codepath/institute'</span>;</p>
                  <p className="mt-2"><span className="text-blue-400">const</span> student = <span className="text-pink-500">new</span> Future(you);</p>
                  <p className="mt-2"><span className="text-gray-500">{"// Initialize intensive training"}</span></p>
                  <p>await student.<span className="text-yellow-200">learn</span>(['React', 'Node.js', 'System Design']);</p>
                  <p className="mt-4"><span className="text-gray-500">{"// Execution result"}</span></p>
                  <p className="mt-1 flex items-center">
                    <span className="text-green-400 mr-2">➜</span> 
                    <Typewriter lines={codeLines} />
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="py-12 bg-white border-b border-border z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border">
              <div>
                <p className="font-display text-4xl font-bold text-navy mb-2"><AnimatedCounter value={8} /></p>
                <p className="font-mono text-sm text-ink-soft uppercase tracking-wide">Career Tracks</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-navy mb-2"><AnimatedCounter value={1200} suffix="+" /></p>
                <p className="font-mono text-sm text-ink-soft uppercase tracking-wide">Project Hours</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-navy mb-2"><AnimatedCounter value={45} suffix="+" /></p>
                <p className="font-mono text-sm text-ink-soft uppercase tracking-wide">Industry Mentors</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-navy mb-2"><AnimatedCounter value={98} suffix="%" /></p>
                <p className="font-mono text-sm text-ink-soft uppercase tracking-wide">Satisfaction</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Course Preview Grid */}
      <section className="py-24 bg-bg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <p className="font-mono text-orange text-sm uppercase tracking-wider mb-2">01. Curriculum</p>
                <h2 className="font-display text-4xl font-bold text-navy mb-4">Featured Tracks</h2>
              </div>
              <Link to="/courses" className="flex items-center text-indigo font-semibold hover:text-indigo-light transition-colors mt-4 md:mt-0">
                View All Courses <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredCourses.map((course, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to="/courses" className="block bg-white rounded-[18px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border group hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-bg-alt p-3 rounded-xl group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-indigo transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-3">{course.title}</h3>
                  <p className="text-ink-soft mb-6">{course.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag, j) => (
                      <span key={j} className="font-mono text-xs px-3 py-1 bg-bg text-ink-soft border border-border rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-white relative z-10 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-mono text-orange text-sm uppercase tracking-wider mb-2">02. Advantage</p>
              <h2 className="font-display text-4xl font-bold text-navy mb-4">The CodePath Edge</h2>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp />, title: "Industry Mentors", desc: "Learn directly from senior engineers at top tech companies." },
              { icon: <Code />, title: "Real Projects", desc: "Build a portfolio that actually proves you can do the job." },
              { icon: <Globe />, title: "Placement Support", desc: "Resume reviews, mock interviews, and direct referrals." },
              { icon: <Cpu />, title: "Flexible Timings", desc: "Part-time or full-time cohorts to fit your schedule." }
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="bg-bg-alt w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-24 bg-bg relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-mono text-orange text-sm uppercase tracking-wider mb-2">03. Alumni</p>
              <h2 className="font-display text-4xl font-bold text-navy">Don't Just Take Our Word For It</h2>
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </Reveal>
        </div>
      </section>

      {/* 6. Tech Marquee */}
      <section className="py-12 bg-white border-t border-border overflow-hidden relative z-10">
        <Reveal>
          <div className="flex whitespace-nowrap w-[200%] animate-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center justify-center w-1/2 md:w-auto px-8 md:px-16">
                <span className="font-display text-2xl md:text-3xl font-bold text-gray-200 uppercase tracking-widest hover:text-indigo-light transition-colors cursor-default">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default Home;
