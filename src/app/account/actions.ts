"use server";

import { aiPoweredContentRecommendations } from "@/ai/flows/ai-powered-content-recommendations";
import type { AIPoweredContentRecommendationsInput } from "@/ai/flows/ai-powered-content-recommendations";

export async function getRecommendations(input: AIPoweredContentRecommendationsInput) {
  try {
    const result = await aiPoweredContentRecommendations(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("AI recommendation error:", error);
    return { success: false, error: "Failed to get recommendations." };
  }
}
