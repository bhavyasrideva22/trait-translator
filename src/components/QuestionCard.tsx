import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export interface Question {
  id: string;
  type: 'likert' | 'multiple-choice' | 'scenario' | 'ranking';
  category: 'psychometric' | 'technical' | 'wiscar';
  subcategory: string;
  question: string;
  description?: string;
  options: {
    value: string;
    label: string;
    score?: number;
  }[];
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, answer: string, score: number) => void;
  onNext: () => void;
  isLast?: boolean;
}

export const QuestionCard = ({ question, onAnswer, onNext, isLast }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
    const selectedOption = question.options.find(opt => opt.value === value);
    if (selectedOption) {
      onAnswer(question.id, value, selectedOption.score || 0);
    }
  };

  const handleNext = () => {
    if (selectedAnswer) {
      onNext();
      setSelectedAnswer("");
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'psychometric':
        return 'border-l-primary';
      case 'technical':
        return 'border-l-accent';
      case 'wiscar':
        return 'border-l-success';
      default:
        return 'border-l-muted';
    }
  };

  return (
    <Card className={`shadow-lg border-l-4 ${getCategoryColor(question.category)}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{question.question}</CardTitle>
            {question.description && (
              <p className="text-muted-foreground">{question.description}</p>
            )}
          </div>
          <div className="text-xs px-2 py-1 bg-secondary rounded-full capitalize">
            {question.category}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <RadioGroup 
          value={selectedAnswer} 
          onValueChange={handleAnswerSelect}
          className="space-y-3"
        >
          {question.options.map((option) => (
            <div 
              key={option.value} 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label 
                htmlFor={option.value} 
                className="flex-1 cursor-pointer font-medium"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        <div className="mt-6 flex justify-end">
          <Button 
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="bg-gradient-to-r from-primary to-primary-glow"
          >
            {isLast ? 'Complete Assessment' : 'Next Question'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};