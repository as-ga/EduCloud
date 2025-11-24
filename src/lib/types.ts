export interface Course {
  id: number;
  title: string;
  progress: number;
  totalModules: number;
  completedModules: number;
  thumbnail: string;
  term: number;
  nextUp: string;
}

export interface Download {
  id: number;
  name: string;
  size: string;
  date: string;
  type: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  correct: number;
}

export interface Quiz {
  title:string;
  duration: string;
  questions: QuizQuestion[];
}

export interface User {
  name: string;
  role: string;
  email: string;
  id: string;
}
