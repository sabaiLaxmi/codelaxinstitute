import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { quizQuestions } from '../data/quizQuestions';
import OrbitImages from '../components/OrbitImages';

const categories = [
  { id: 'HTML', title: 'HTML', icon: '</>', color: 'text-orange', border: 'border-orange', bg: 'bg-orange/10' },
  { id: 'CSS', title: 'CSS', icon: '{#}', color: 'text-blue-500', border: 'border-blue-500', bg: 'bg-blue-500/10' },
  { id: 'JavaScript', title: 'JavaScript', icon: '{JS}', color: 'text-yellow-500', border: 'border-yellow-500', bg: 'bg-yellow-500/10' },
  { id: 'ReactJS', title: 'ReactJS', icon: '⚛', color: 'text-cyan-400', border: 'border-cyan-400', bg: 'bg-cyan-400/10' },
  { id: 'Theory', title: 'Theory Q&A', icon: '?', color: 'text-indigo', border: 'border-indigo', bg: 'bg-indigo/10' },
];

const Quiz = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filtered questions based on category
  const filteredQuestions = selectedCategory 
    ? quizQuestions.filter(q => q.category === selectedCategory)
    : [];

  // Calculate score dynamically based on userAnswers
  const score = Object.keys(userAnswers).reduce((acc, qIndex) => {
    const q = filteredQuestions[qIndex];
    if (q && userAnswers[qIndex] === q.answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  // Parallax Mouse tracking
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const parallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const parallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Orbit State
  const [isHovering, setIsHovering] = useState(false);

  // Quiz Navigation Logic
  const handleAnswerOptionClick = (index) => {
    // Only allow changing answer if they haven't finished the quiz yet
    if (showResult || showOverview) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion]: index
    }));
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (showResult && !showOverview && filteredQuestions.length > 0) {
      const percentage = (score / filteredQuestions.length) * 100;
      if (percentage >= 90) fireConfetti(3);
      else if (percentage >= 75) fireConfetti(2);
      else if (percentage >= 50) fireConfetti(1);
    }
  }, [showResult, showOverview, score, filteredQuestions.length]);

  const fireConfetti = (intensity) => {
    const duration = intensity * 1500;
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 5 * intensity, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#F97316', '#4338CA'] });
      confetti({ particleCount: 5 * intensity, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#F97316', '#4338CA'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  const getResultMessage = () => {
    const percentage = (score / filteredQuestions.length) * 100;
    if (percentage >= 90) return { text: "Splendid!", color: "text-indigo" };
    if (percentage >= 75) return { text: "Excellent!", color: "text-green-500" };
    if (percentage >= 50) return { text: "Very Nice!", color: "text-orange" };
    return { text: "Good try!", color: "text-ink-soft" };
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResult(false);
    setShowOverview(false);
  };

  // The Hub UI
  if (!selectedCategory) {
    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="bg-bg min-h-screen pt-24 pb-20 px-4 flex flex-col md:flex-row items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="z-20 flex flex-col items-center md:items-start justify-center w-full md:w-1/3 md:pl-12 pointer-events-none text-center md:text-left mt-8 md:mt-0 mb-8 md:mb-0">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-navy tracking-tight drop-shadow-lg leading-tight">
            Select <br className="hidden md:block" />
            <span className="text-orange">Topic</span>
          </h1>
          <p className="text-ink-soft text-lg md:text-xl font-medium mt-4">Choose a category to begin</p>
        </div>

        <motion.div 
          style={{ x: parallaxX, y: parallaxY }}
          className="relative z-10 w-full md:w-2/3 max-w-4xl flex items-center justify-center aspect-square max-h-[60vh] md:max-h-[80vh]"
        >
          <OrbitImages
            items={categories.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full h-full rounded-[20px] bg-white shadow-xl cursor-pointer border-2 ${cat.border} flex flex-col items-center justify-center gap-2 transition-shadow hover:shadow-2xl group pointer-events-auto`}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${cat.bg} flex items-center justify-center ${cat.color} font-mono text-xl md:text-2xl font-bold transition-transform group-hover:scale-110`}>
                  {cat.icon}
                </div>
                <span className="font-display font-bold text-navy text-sm md:text-lg text-center px-2">
                  {cat.title}
                </span>
              </div>
            ))}
            shape="ellipse"
            radiusX={windowWidth < 768 ? 280 : 380} 
            radiusY={windowWidth < 768 ? 70 : 100}
            rotation={-8}
            baseWidth={1100}
            duration={30}
            itemSize={windowWidth < 768 ? 100 : 120}
            responsive={true}
            showPath={true}
          />
        </motion.div>
      </div>
    );
  }

  const selectedOption = userAnswers[currentQuestion];
  const hasAnswered = selectedOption !== undefined;
  const isLastQuestion = currentQuestion === filteredQuestions.length - 1;

  // Overview UI Component
  if (showOverview) {
    return (
      <div className="bg-bg min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-display text-3xl font-bold text-navy">
              Test Overview: <span className="text-orange">{selectedCategory}</span>
            </h1>
            <button 
              onClick={resetQuiz}
              className="px-6 py-2 bg-bg-alt text-navy hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors border border-border"
            >
              Back to Hub
            </button>
          </div>

          <div className="space-y-6">
            {filteredQuestions.map((q, index) => {
              const uAnswer = userAnswers[index];
              const isCorrect = uAnswer === q.answer;
              const skipped = uAnswer === undefined;

              return (
                <div key={q.id} className="bg-white rounded-2xl shadow-md border border-border p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-navy">{q.question}</h3>
                  </div>

                  <div className="space-y-3 mb-6 pl-12">
                    {q.options.map((opt, optIndex) => {
                      let bgClass = "bg-bg-alt border border-transparent";
                      let textClass = "text-ink";
                      let icon = "";

                      if (optIndex === q.answer) {
                        bgClass = "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
                        textClass = "text-green-700 dark:text-green-400 font-semibold";
                        icon = "✓ Correct Answer";
                      } else if (optIndex === uAnswer) {
                        bgClass = "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
                        textClass = "text-red-700 dark:text-red-400 font-semibold";
                        icon = "✗ Your Answer";
                      }

                      return (
                        <div key={optIndex} className={`p-4 rounded-xl flex justify-between items-center ${bgClass} ${textClass}`}>
                          <span>{String.fromCharCode(65 + optIndex)}. {opt}</span>
                          {icon && <span className="text-sm font-bold opacity-80">{icon}</span>}
                        </div>
                      );
                    })}
                  </div>

                  {skipped ? (
                     <div className="pl-12 text-orange font-medium">You skipped this question.</div>
                  ) : (
                    <div className="pl-12">
                      <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800'}`}>
                        <h4 className={`font-bold mb-1 ${isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                          {isCorrect ? 'Correct!' : 'Incorrect.'}
                        </h4>
                        <p className="text-ink-soft">{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={resetQuiz}
              className="px-8 py-4 bg-indigo text-white rounded-xl font-semibold text-lg hover:bg-indigo-light transition-all shadow-lg"
            >
              Finish and Return to Hub
            </button>
          </div>
        </div>
      </div>
    );
  }

  // The Quiz UI (Questions and Final Score Result)
  return (
    <div className="bg-bg min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative">
      <button 
        onClick={resetQuiz}
        className="absolute top-24 left-4 md:left-8 px-4 py-2 bg-bg-alt text-ink-soft rounded-lg font-medium hover:text-navy transition-colors flex items-center gap-2 border border-border"
      >
        ← Back to Hub
      </button>

      <div className="w-full max-w-3xl mt-12 md:mt-0">
        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[24px] shadow-2xl border border-border p-8 md:p-12 text-center"
            >
              <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${getResultMessage().color}`}>
                {getResultMessage().text}
              </h2>
              <p className="text-xl text-ink-soft mb-8">
                You scored {score} out of {filteredQuestions.length} in {selectedCategory}
              </p>
              
              <div className="w-full bg-bg-alt rounded-full h-4 mb-8 overflow-hidden">
                <div 
                  className="bg-indigo h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${(score / filteredQuestions.length) * 100}%` }}
                ></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setShowOverview(true)}
                  className="px-8 py-4 bg-white border-2 border-indigo text-indigo rounded-xl font-semibold text-lg hover:bg-indigo/5 transition-all w-full sm:w-auto"
                >
                  Review Answers
                </button>
                <button 
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-indigo text-white rounded-xl font-semibold text-lg hover:bg-indigo-light transition-all shadow-[0_4px_14px_rgba(67,56,202,0.39)] hover:-translate-y-1 w-full sm:w-auto"
                >
                  Back to Hub
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[24px] shadow-2xl border border-border p-8 md:p-12"
            >
              <div className="mb-8 flex justify-between items-center">
                <span className="text-sm font-mono text-orange uppercase tracking-wider font-bold">
                  {selectedCategory}
                </span>
                <span className="text-sm font-semibold text-ink-soft bg-bg-alt px-3 py-1 rounded-full">
                  Question {currentQuestion + 1} / {filteredQuestions.length}
                </span>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy leading-tight">
                  {filteredQuestions[currentQuestion].question}
                </h2>
              </div>
              
              <div className="space-y-4 mb-8">
                {filteredQuestions[currentQuestion].options.map((option, index) => {
                   let btnClass = "w-full text-left p-5 rounded-xl border-2 transition-all font-medium text-lg flex items-center ";
                   if (hasAnswered) {
                     if (index === filteredQuestions[currentQuestion].answer) {
                       btnClass += "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400";
                     } else if (index === selectedOption) {
                       btnClass += "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400";
                     } else {
                       btnClass += "border-border text-ink opacity-50";
                     }
                   } else {
                     btnClass += "border-border text-ink hover:border-indigo hover:bg-indigo/5";
                   }

                   return (
                    <button
                      key={index}
                      onClick={() => handleAnswerOptionClick(index)}
                      className={btnClass}
                    >
                      <span className="inline-block w-8 font-mono text-ink-soft opacity-70">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Explanations Box */}
              {hasAnswered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-8 p-6 rounded-xl border ${selectedOption === filteredQuestions[currentQuestion].answer ? 'bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800'}`}
                >
                  <h4 className={`font-bold mb-2 ${selectedOption === filteredQuestions[currentQuestion].answer ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                    {selectedOption === filteredQuestions[currentQuestion].answer ? 'Correct!' : 'Incorrect.'}
                  </h4>
                  <p className="text-ink-soft leading-relaxed">
                    {filteredQuestions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                <button 
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors ${currentQuestion === 0 ? 'opacity-0 pointer-events-none' : 'bg-bg-alt text-navy hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  ← Previous
                </button>

                {hasAnswered && (
                  <button 
                    onClick={handleNext}
                    className="px-8 py-3 bg-indigo text-white rounded-xl font-semibold hover:bg-indigo-light transition-all shadow-[0_4px_14px_rgba(67,56,202,0.39)] hover:-translate-y-0.5"
                  >
                    {isLastQuestion ? 'Finish Quiz' : 'Next Question →'}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
