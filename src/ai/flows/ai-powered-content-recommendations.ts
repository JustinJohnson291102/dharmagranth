'use server';
/**
 * @fileOverview AI-powered content recommendations flow.
 *
 * - aiPoweredContentRecommendations - A function that handles the content recommendation process.
 * - AIPoweredContentRecommendationsInput - The input type for the aiPoweredContentRecommendations function.
 * - AIPoweredContentRecommendationsOutput - The return type for the aiPoweredContentRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredContentRecommendationsInputSchema = z.object({
  viewingHistory: z
    .array(z.string())
    .describe('An array of video titles the user has watched.'),
  preferences: z
    .string()
    .optional()
    .describe('Optional user preferences or interests.'),
});
export type AIPoweredContentRecommendationsInput = z.infer<
  typeof AIPoweredContentRecommendationsInputSchema
>;

const AIPoweredContentRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of recommended video titles.'),
  reasoning: z
    .string()
    .optional()
    .describe('The AI reasoning behind the recommendations.'),
});
export type AIPoweredContentRecommendationsOutput = z.infer<
  typeof AIPoweredContentRecommendationsOutputSchema
>;

export async function aiPoweredContentRecommendations(
  input: AIPoweredContentRecommendationsInput
): Promise<AIPoweredContentRecommendationsOutput> {
  return aiPoweredContentRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredContentRecommendationsPrompt',
  input: {schema: AIPoweredContentRecommendationsInputSchema},
  output: {schema: AIPoweredContentRecommendationsOutputSchema},
  prompt: `You are an AI video recommendation system for Dharmagranth TV.  Based on the user's viewing history and preferences, recommend videos that align with their interests and dharmic values.  Explain your reasoning briefly.

Viewing History: {{#each viewingHistory}}{{{this}}}, {{/each}}
Preferences: {{{preferences}}}

Respond with ONLY a JSON object that contains video recommendations and reasoning.`,
});

const aiPoweredContentRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiPoweredContentRecommendationsFlow',
    inputSchema: AIPoweredContentRecommendationsInputSchema,
    outputSchema: AIPoweredContentRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
