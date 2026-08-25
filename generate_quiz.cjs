const fs = require('fs');

const generateQuestions = () => {
  let id = 1;
  const questions = [];

  // Helper to generate boilerplate questions for mock purposes
  const generateCategory = (category, count, prefix) => {
    for (let i = 1; i <= count; i++) {
      questions.push({
        id: id++,
        category,
        question: `Sample ${prefix} Question ${i}?`,
        options: [
          `Option A for ${prefix} ${i}`,
          `Option B for ${prefix} ${i} (Correct)`,
          `Option C for ${prefix} ${i}`,
          `Option D for ${prefix} ${i}`
        ],
        answer: 1 // Option B
      });
    }
  };

  // HTML
  questions.push({ id: id++, category: 'HTML', question: 'What does HTML stand for?', options: ['Hyper Text Preprocessor', 'Hyper Text Markup Language', 'Hyper Text Multiple Language', 'Hyper Tool Multi Language'], answer: 1 });
  questions.push({ id: id++, category: 'HTML', question: 'Which tag is used for the largest heading?', options: ['<head>', '<h6>', '<h1>', '<heading>'], answer: 2 });
  generateCategory('HTML', 18, 'HTML');

  // JS
  questions.push({ id: id++, category: 'JavaScript', question: 'Which symbol is used for single line comments in JS?', options: ['//', '/*', '<!--', '#'], answer: 0 });
  questions.push({ id: id++, category: 'JavaScript', question: 'How do you declare a JavaScript variable?', options: ['v carName;', 'var carName;', 'variable carName;', 'declare carName;'], answer: 1 });
  generateCategory('JavaScript', 18, 'JS');

  // React
  questions.push({ id: id++, category: 'ReactJS', question: 'What is React primarily used for?', options: ['Database', 'Routing', 'User Interfaces', 'Design'], answer: 2 });
  questions.push({ id: id++, category: 'ReactJS', question: 'What hook is used for state?', options: ['useEffect', 'useState', 'useContext', 'useReducer'], answer: 1 });
  generateCategory('ReactJS', 18, 'React');

  // Theory
  questions.push({ id: id++, category: 'Theory', question: 'What is Time Complexity?', options: ['Time taken to write code', 'How fast the CPU is', 'Computational complexity that describes the amount of time it takes to run an algorithm', 'None of the above'], answer: 2 });
  questions.push({ id: id++, category: 'Theory', question: 'What does DRY stand for?', options: ['Don\'t Repeat Yourself', 'Do Repeat Yourself', 'Don\'t Read Yourself', 'Do Read Yourself'], answer: 0 });
  generateCategory('Theory', 8, 'Theory');

  const content = `export const quizQuestions = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync('./src/data/quizQuestions.js', content);
  console.log('Generated src/data/quizQuestions.js with 70 questions.');
};

generateQuestions();
