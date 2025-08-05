import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

interface ProgressTrackerProps {
  currentStep: number;
  totalSteps: number;
  sections: string[];
}

export const ProgressTracker = ({ currentStep, totalSteps, sections }: ProgressTrackerProps) => {
  const progress = ((currentStep - 1) / totalSteps) * 100;
  
  return (
    <div className="bg-card border rounded-lg p-6 mb-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Assessment Progress</h3>
        <span className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      
      <Progress value={progress} className="mb-4" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sections.map((section, index) => {
          const isCompleted = index + 1 < currentStep;
          const isCurrent = index + 1 === currentStep;
          
          return (
            <div 
              key={section}
              className={`flex items-center gap-2 p-2 rounded transition-colors ${
                isCurrent ? 'bg-primary/10 text-primary' : 
                isCompleted ? 'bg-success/10 text-success' : 
                'text-muted-foreground'
              }`}
            >
              {isCompleted ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <div className={`w-4 h-4 rounded-full border-2 ${
                  isCurrent ? 'border-primary bg-primary' : 'border-muted'
                }`} />
              )}
              <span className="text-sm font-medium">{section}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};