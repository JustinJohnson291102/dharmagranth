"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getRecommendations } from "@/app/account/actions";
import type { AIPoweredContentRecommendationsOutput } from "@/ai/flows/ai-powered-content-recommendations";
import { Wand2, Film, BrainCircuit } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

interface RecommendationsProps {
  viewingHistory: string[];
  preferences: string;
}

export default function Recommendations({ viewingHistory, preferences }: RecommendationsProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIPoweredContentRecommendationsOutput | null>(null);
  const { toast } = useToast();

  const handleGetRecommendations = async () => {
    setLoading(true);
    setResult(null);

    const response = await getRecommendations({ viewingHistory, preferences });

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error || "Could not generate recommendations.",
      });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!result && !loading && (
        <div className="text-center p-8 border-2 border-dashed rounded-lg">
          <Wand2 className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Ready for your personalized picks?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Click the button to let our AI find content just for you.</p>
          <Button onClick={handleGetRecommendations} className="mt-6">
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Recommendations
          </Button>
        </div>
      )}

      {loading && (
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="h-8 w-1/2 mt-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      )}

      {result && (
        <div className="space-y-6 animate-fade-in-up">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Film className="h-5 w-5 text-primary" />
              Recommended for You
            </h3>
            <ul className="mt-2 list-disc list-inside space-y-1 text-foreground">
              {result.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>

          {result.reasoning && (
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-primary" />
                AI's Reasoning
              </h3>
              <p className="mt-2 text-muted-foreground italic">
                "{result.reasoning}"
              </p>
            </div>
          )}

           <Button onClick={handleGetRecommendations} variant="outline" size="sm">
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Again
          </Button>
        </div>
      )}
    </div>
  );
}
