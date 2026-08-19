import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Server, Palette, Megaphone, Database, Cpu, Shield, Cloud, Clock, BarChart, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

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

const tracks = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Monitor className="w-5 h-5" />,
    duration: '4 months',
    level: 'Beginner to Pro',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    alt: 'React javascript code editor close up on screen',
    syllabus: [
      { num: '01', title: 'HTML5 & Semantic Markup', desc: 'Structure web pages with modern, accessible HTML.' },
      { num: '02', title: 'CSS3 & Responsive Design', desc: 'Style fluid layouts using Flexbox and Grid.' },
      { num: '03', title: 'JavaScript (ES6+)', desc: 'Master core programming logic, async data, and DOM manipulation.' },
      { num: '04', title: 'React.js', desc: 'Build complex, component-driven user interfaces.' },
      { num: '05', title: 'Tailwind CSS', desc: 'Rapidly style applications with utility classes.' },
      { num: '06', title: 'Capstone Project', desc: 'Develop and deploy a full-featured frontend application.' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <Server className="w-5 h-5" />,
    duration: '4 months',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Backend developer terminal with server database code',
    syllabus: [
      { num: '01', title: 'Node.js Fundamentals', desc: 'Understand the V8 engine, event loop, and core modules.' },
      { num: '02', title: 'Express.js', desc: 'Build robust RESTful APIs and server logic.' },
      { num: '03', title: 'Databases (MongoDB & SQL)', desc: 'Model, query, and manage relational and NoSQL data.' },
      { num: '04', title: 'Authentication & Security', desc: 'Implement JWT, OAuth, and protect routes.' },
      { num: '05', title: 'API Testing & Deployment', desc: 'Write integration tests and deploy to cloud providers.' },
      { num: '06', title: 'Capstone Project', desc: 'Architect and deploy a secure, scalable backend service.' }
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    icon: <Palette className="w-5 h-5" />,
    duration: '3 months',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    alt: 'UI UX designer figma screen and wireframe sketches',
    syllabus: [
      { num: '01', title: 'Design Fundamentals', desc: 'Master color theory, typography, and visual hierarchy.' },
      { num: '02', title: 'User Research', desc: 'Conduct interviews, create personas, and map journeys.' },
      { num: '03', title: 'Wireframing & Prototyping (Figma)', desc: 'Translate ideas into interactive high-fidelity prototypes.' },
      { num: '04', title: 'Design Systems', desc: 'Create reusable component libraries and design tokens.' },
      { num: '05', title: 'Usability Testing', desc: 'Validate designs through user feedback and iteration.' },
      { num: '06', title: 'Capstone Project', desc: 'Deliver a complete, researched product design case study.' }
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: <Megaphone className="w-5 h-5" />,
    duration: '3 months',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Digital marketing analytics dashboard on laptop',
    syllabus: [
      { num: '01', title: 'SEO Fundamentals', desc: 'Optimize content for search engines and organic growth.' },
      { num: '02', title: 'Social Media Marketing', desc: 'Build brand presence across major platforms.' },
      { num: '03', title: 'Google Ads & PPC', desc: 'Create and manage paid acquisition campaigns.' },
      { num: '04', title: 'Content Marketing', desc: 'Develop compelling narratives and inbound strategies.' },
      { num: '05', title: 'Analytics & Reporting', desc: 'Track KPIs, conversions, and ROI using Google Analytics.' },
      { num: '06', title: 'Capstone Project', desc: 'Execute and analyze a comprehensive digital campaign.' }
    ]
  },
  {
    id: 'data',
    title: 'Data Science',
    icon: <Database className="w-5 h-5" />,
    duration: '4 months',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Data science dashboard and analyst charts on screen',
    syllabus: [
      { num: '01', title: 'Python for Data Science', desc: 'Learn Python syntax, data structures, and functional programming.' },
      { num: '02', title: 'Statistics & Probability', desc: 'Master the math required for complex data analysis.' },
      { num: '03', title: 'Data Wrangling with Pandas', desc: 'Clean, manipulate, and structure raw datasets.' },
      { num: '04', title: 'Data Visualization', desc: 'Create compelling charts with Matplotlib and Seaborn.' },
      { num: '05', title: 'Machine Learning Basics', desc: 'Implement linear regression and classification models.' },
      { num: '06', title: 'Capstone Project', desc: 'Analyze a real-world dataset and present predictive findings.' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI/ML',
    icon: <Cpu className="w-5 h-5" />,
    duration: '4 months',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    alt: 'Machine learning neural network visualization',
    syllabus: [
      { num: '01', title: 'Python & Math Foundations', desc: 'Calculus, linear algebra, and advanced Python.' },
      { num: '02', title: 'Supervised Learning', desc: 'Master regression, SVMs, and decision trees.' },
      { num: '03', title: 'Unsupervised Learning', desc: 'Learn clustering algorithms and dimensionality reduction.' },
      { num: '04', title: 'Neural Networks & Deep Learning', desc: 'Build architectures using TensorFlow and PyTorch.' },
      { num: '05', title: 'Model Deployment', desc: 'Serve AI models in production via APIs.' },
      { num: '06', title: 'Capstone Project', desc: 'Train, evaluate, and deploy a custom deep learning model.' }
    ]
  },
  {
    id: 'cyber',
    title: 'Cyber Security',
    icon: <Shield className="w-5 h-5" />,
    duration: '3 months',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cyber security ethical hacking laptop dark room',
    syllabus: [
      { num: '01', title: 'Networking Fundamentals', desc: 'Understand OSI model, TCP/IP, and packet analysis.' },
      { num: '02', title: 'Ethical Hacking Basics', desc: 'Learn reconnaissance, scanning, and vulnerability assessment.' },
      { num: '03', title: 'Web App Security (OWASP)', desc: 'Identify and mitigate injection, XSS, and CSRF attacks.' },
      { num: '04', title: 'Cryptography Basics', desc: 'Master encryption standards, hashing, and PKI.' },
      { num: '05', title: 'Security Tools & Incident Response', desc: 'Use Nmap, Wireshark, and handle breaches.' },
      { num: '06', title: 'Capstone Project', desc: 'Perform a full penetration test and write a vulnerability report.' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: <Cloud className="w-5 h-5" />,
    duration: '3 months',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cloud computing server room and AWS cloud dashboard',
    syllabus: [
      { num: '01', title: 'Cloud Fundamentals (AWS/Azure/GCP)', desc: 'Understand core cloud concepts and provider ecosystems.' },
      { num: '02', title: 'Compute & Storage Services', desc: 'Deploy VMs, containers, and manage object storage.' },
      { num: '03', title: 'Networking & Security in Cloud', desc: 'Configure VPCs, subnets, firewalls, and IAM.' },
      { num: '04', title: 'DevOps & CI/CD Basics', desc: 'Automate deployments and infrastructure as code.' },
      { num: '05', title: 'Cloud Deployment Project', desc: 'Migrate a legacy application to cloud architecture.' },
      { num: '06', title: 'Capstone Project', desc: 'Architect a highly available, auto-scaling cloud environment.' }
    ]
  }
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState(null);

  const activeTrack = activeTab ? tracks.find(t => t.id === activeTab) : null;

  return (
    <div className="bg-bg min-h-screen pt-24 pb-20">
      {/* 1. Hero Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Reveal>
          <p className="font-mono text-orange text-sm uppercase tracking-wider mb-4">Curriculum</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
            Master the <span className="text-indigo">Modern Stack</span>
          </h1>
          <p className="text-xl text-ink-soft leading-relaxed max-w-3xl mx-auto">
            Choose your specialization. Our immersive programs are designed by industry experts to take you from fundamentals to advanced engineering in months.
          </p>
        </Reveal>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Reveal delay={0.1}>
          <AnimatePresence mode="wait">
            {!activeTrack ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {tracks.map((track) => (
                  <div
                    key={track.id}
                    onClick={() => setActiveTab(track.id)}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo/20 transition-all duration-300 cursor-pointer bg-white group hover:-translate-y-2 flex flex-col"
                  >
                    <div className="h-56 relative overflow-hidden">
                      <img src={track.image} alt={track.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                         <div className="bg-orange p-2 rounded-lg text-white shadow-lg shrink-0">
                           {track.icon}
                         </div>
                         <h3 className="font-display font-bold text-white text-xl leading-tight">{track.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex gap-2 mb-6 flex-wrap">
                        <span className="px-3 py-1 bg-bg-alt text-ink-soft text-xs font-semibold rounded-md border border-border">{track.duration}</span>
                        <span className="px-3 py-1 bg-bg-alt text-ink-soft text-xs font-semibold rounded-md border border-border">{track.level}</span>
                      </div>
                      <div className="mt-auto flex items-center justify-between text-indigo font-semibold text-sm group-hover:text-indigo-light transition-colors">
                        <span>View Syllabus</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-[24px] overflow-hidden shadow-2xl border border-border"
              >
                <div className="p-4 bg-bg-alt flex items-center justify-between border-b border-border">
                  <button 
                    onClick={() => setActiveTab(null)}
                    className="flex items-center gap-2 text-indigo font-bold hover:text-indigo-light transition-colors px-4 py-2 rounded-lg hover:bg-indigo/5 text-sm md:text-base"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Courses
                  </button>
                </div>
                
                {/* Image & Header */}
                <div className="h-64 md:h-[400px] relative">
                  <img src={activeTrack.image} alt={activeTrack.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                     <div className="flex items-center gap-3 mb-4">
                       <div className="bg-orange p-3 rounded-xl text-white shadow-lg">
                         {activeTrack.icon}
                       </div>
                       <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
                         {activeTrack.title}
                       </h2>
                     </div>
                     <div className="flex flex-wrap gap-3 md:gap-4 mt-6">
                        <span className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-navy/60 backdrop-blur-md border border-white/10 rounded-lg text-gray-200 text-xs md:text-sm font-medium">
                          <Clock className="w-4 h-4 text-orange" /> {activeTrack.duration}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-navy/60 backdrop-blur-md border border-white/10 rounded-lg text-gray-200 text-xs md:text-sm font-medium">
                          <BarChart className="w-4 h-4 text-orange" /> {activeTrack.level}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-navy/60 backdrop-blur-md border border-white/10 rounded-lg text-gray-200 text-xs md:text-sm font-medium">
                          <Calendar className="w-4 h-4 text-orange" /> Weekend & Weekday Batches
                        </span>
                     </div>
                  </div>
                </div>

                {/* Syllabus */}
                <div className="p-6 md:p-12">
                  <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-navy mb-2">Program Syllabus</h3>
                      <p className="text-ink-soft text-sm md:text-base">What you will learn during this track.</p>
                    </div>
                    <Link 
                      to="/contact" 
                      className="w-full md:w-auto px-8 py-4 bg-indigo text-white rounded-xl font-semibold text-base md:text-lg hover:bg-indigo-light transition-all shadow-[0_0_20px_rgba(67,56,202,0.4)] flex items-center justify-center gap-2 shrink-0"
                    >
                      Enroll Now <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {activeTrack.syllabus.map((module, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-bg-alt text-indigo font-mono font-bold flex items-center justify-center shrink-0 border border-indigo/20 group-hover:bg-indigo group-hover:text-white transition-colors">
                            {module.num}
                          </div>
                          {i !== activeTrack.syllabus.length - 1 && (
                            <div className="w-px h-full bg-border mt-2"></div>
                          )}
                        </div>
                        <div className="pb-4">
                          <h4 className="font-display font-bold text-navy text-lg mb-1 flex items-center gap-2">
                            {module.title}
                            {i === activeTrack.syllabus.length - 1 && <CheckCircle className="w-4 h-4 text-green-500" />}
                          </h4>
                          <p className="text-ink-soft leading-relaxed">{module.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </div>
  );
};

export default Courses;
