import type { Course, Download, Quiz } from '@/lib/types';

export const COURSES: Course[] = [
  { id: 1, title: "Introduction to Python Programming", progress: 75, totalModules: 12, completedModules: 9, thumbnail: "py", term: 2, nextUp: "Week 5 - Advanced Functions" },
  { id: 2, title: "Mathematics for Data Science I", progress: 40, totalModules: 10, completedModules: 4, thumbnail: "math", term: 2, nextUp: "Week 3 - Linear Algebra" },
  { id: 3, title: "English II", progress: 90, totalModules: 8, completedModules: 7, thumbnail: "eng", term: 2, nextUp: "Final Paper Submission" },
];

export const DOWNLOADS: Download[] = [
  { id: 1, name: "Week 1 - Python Basics.pdf", size: "2.4 MB", date: "Oct 24, 2025", type: "PDF" },
  { id: 2, name: "Math Formulas Cheat Sheet.pdf", size: "1.1 MB", date: "Oct 22, 2025", type: "PDF" },
  { id: 3, name: "English II - Lecture Slides.zip", size: "15 MB", date: "Oct 20, 2025", type: "ZIP" },
  { id: 4, name: "Practice Dataset.csv", size: "450 KB", date: "Oct 18, 2025", type: "CSV" },
];

export const QUIZ_DATA: Quiz = {
  title: "Week 4 Graded Assessment",
  duration: "45 mins",
  questions: [
    {
      id: 1,
      text: "Which of the following is NOT a mutable data type in Python?",
      options: ["List", "Dictionary", "Tuple", "Set"],
      correct: 2
    },
    {
      id: 2,
      text: "What is the output of print(2 ** 3)?",
      options: ["6", "8", "9", "Error"],
      correct: 1
    },
    {
      id: 3,
      text: "How do you start writing a while loop in Python?",
      options: ["while x > y:", "while (x > y)", "x > y while {"],
      correct: 0,
    },
  ]
};

export const MOCK_USER = {
  name: 'Alex Johnson',
  role: 'Student',
  email: 'alex.j@university.edu',
  id: 'ST-2025-8892'
};
