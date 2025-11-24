'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing course content.
 *
 * - summarizeCourseContent - A function that summarizes the course content.
 * - SummarizeCourseContentInput - The input type for the summarizeCourseContent function.
 * - SummarizeCourseContentOutput - The return type for the summarizeCourseContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCourseContentInputSchema = z.object({
  content: z.string().describe('The course content (lecture transcript and notes) to summarize.'),
});
export type SummarizeCourseContentInput = z.infer<typeof SummarizeCourseContentInputSchema>;

const SummarizeCourseContentOutputSchema = z.object({
  summary: z.string().describe('A summary of the course content.'),
});
export type SummarizeCourseContentOutput = z.infer<typeof SummarizeCourseContentOutputSchema>;

export async function summarizeCourseContent(input: SummarizeCourseContentInput): Promise<SummarizeCourseContentOutput> {
  return summarizeCourseContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCourseContentPrompt',
  input: {schema: SummarizeCourseContentInputSchema},
  output: {schema: SummarizeCourseContentOutputSchema},
  prompt: `You are an expert educator. Please summarize the following course content so that students can quickly review the main points.\n\nCourse Content:\n{{{content}}}`,
});

const summarizeCourseContentFlow = ai.defineFlow(
  {
    name: 'summarizeCourseContentFlow',
    inputSchema: SummarizeCourseContentInputSchema,
    outputSchema: SummarizeCourseContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
