import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-course-content.ts';
import '@/ai/flows/personalize-quiz-questions.ts';
import '@/ai/flows/generate-course-ideas.ts';