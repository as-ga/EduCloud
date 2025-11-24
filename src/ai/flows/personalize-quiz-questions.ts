'use server';
/**
 * @fileOverview A personalized quiz question generator AI agent.
 *
 * - personalizeQuizQuestions - A function that handles the quiz question personalization process.
 * - PersonalizeQuizQuestionsInput - The input type for the personalizeQuizQuestions function.
 * - PersonalizeQuizQuestionsOutput - The return type for the personalizeQuizQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeQuizQuestionsInputSchema = z.object({
  topic: z.string().describe('The specific topic or lecture to generate quiz questions for.'),
  numQuestions: z.number().int().min(1).max(10).default(5).describe('The number of quiz questions to generate.'),
});
export type PersonalizeQuizQuestionsInput = z.infer<typeof PersonalizeQuizQuestionsInputSchema>;

const PersonalizeQuizQuestionsOutputSchema = z.object({
  questions: z.array(z.string()).describe('An array of personalized quiz questions based on the specified topic.'),
});
export type PersonalizeQuizQuestionsOutput = z.infer<typeof PersonalizeQuizQuestionsOutputSchema>;

export async function personalizeQuizQuestions(input: PersonalizeQuizQuestionsInput): Promise<PersonalizeQuizQuestionsOutput> {
  return personalizeQuizQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeQuizQuestionsPrompt',
  input: {schema: PersonalizeQuizQuestionsInputSchema},
  output: {schema: PersonalizeQuizQuestionsOutputSchema},
  prompt: `You are an expert quiz question generator for university courses.

  Generate {{numQuestions}} quiz questions based on the following topic or lecture:

  Topic: {{{topic}}}

  The quiz questions should be challenging and relevant to the topic.

  Format the output as a JSON array of strings, where each string is a quiz question.`,
});

const personalizeQuizQuestionsFlow = ai.defineFlow(
  {
    name: 'personalizeQuizQuestionsFlow',
    inputSchema: PersonalizeQuizQuestionsInputSchema,
    outputSchema: PersonalizeQuizQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
