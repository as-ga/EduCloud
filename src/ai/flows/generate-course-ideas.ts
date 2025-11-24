'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate course ideas based on trending technologies and student interests.
 *
 * The flow takes in a description of the desired course idea and returns a list of potential course ideas.
 *
 * @interface GenerateCourseIdeasInput - Input type for the generateCourseIdeas function.
 * @interface GenerateCourseIdeasOutput - Output type for the generateCourseIdeas function.
 * @function generateCourseIdeas - The main function to generate course ideas.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCourseIdeasInputSchema = z.object({
  description: z
    .string()
    .describe(
      'A description of the desired course idea, including trending technologies and student interests.'
    ),
});

export type GenerateCourseIdeasInput = z.infer<typeof GenerateCourseIdeasInputSchema>;

const GenerateCourseIdeasOutputSchema = z.object({
  ideas: z
    .array(z.string())
    .describe('A list of potential course ideas based on the input description.'),
});

export type GenerateCourseIdeasOutput = z.infer<typeof GenerateCourseIdeasOutputSchema>;

export async function generateCourseIdeas(input: GenerateCourseIdeasInput): Promise<GenerateCourseIdeasOutput> {
  return generateCourseIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCourseIdeasPrompt',
  input: {schema: GenerateCourseIdeasInputSchema},
  output: {schema: GenerateCourseIdeasOutputSchema},
  prompt: `You are an expert in generating course ideas based on trending technologies and student interests.

  Based on the following description, generate a list of 5 potential course ideas:

  Description: {{{description}}}

  Format the output as a JSON array of strings.
  `,
});

const generateCourseIdeasFlow = ai.defineFlow(
  {
    name: 'generateCourseIdeasFlow',
    inputSchema: GenerateCourseIdeasInputSchema,
    outputSchema: GenerateCourseIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
