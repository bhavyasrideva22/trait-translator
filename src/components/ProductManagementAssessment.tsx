import { useState } from "react";
import { AssessmentIntro } from "./AssessmentIntro";
import { QuestionCard, Question } from "./QuestionCard";
import { ProgressTracker } from "./ProgressTracker";
import { AssessmentResults } from "./AssessmentResults";
import { assessmentQuestions } from "@/data/questions";

interface Answer {
  questionId: string;
  answer: string;
  score: number;
}

type AssessmentPhase = 'intro' | 'questions' | 'results';

export const ProductManagementAssessment = () => {
  const [phase, setPhase] = useState<AssessmentPhase>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const sections = ['Psychometric', 'Technical', 'WISCAR', 'Results'];
  const currentStep = phase === 'intro' ? 0 : 
                     phase === 'questions' ? Math.floor((currentQuestionIndex / assessmentQuestions.length) * 3) + 1 : 
                     4;

  const handleStartAssessment = () => {
    setPhase('questions');
  };

  const handleAnswer = (questionId: string, answer: string, score: number) => {
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== questionId);
      return [...filtered, { questionId, answer, score }];
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setPhase('results');
    }
  };

  const calculateScores = () => {
    const psychometricAnswers = answers.filter(a => 
      assessmentQuestions.find(q => q.id === a.questionId)?.category === 'psychometric'
    );
    const technicalAnswers = answers.filter(a => 
      assessmentQuestions.find(q => q.id === a.questionId)?.category === 'technical'
    );
    const wiscarAnswers = answers.filter(a => 
      assessmentQuestions.find(q => q.id === a.questionId)?.category === 'wiscar'
    );

    const psychometricScore = psychometricAnswers.length > 0 
      ? Math.round(psychometricAnswers.reduce((sum, a) => sum + a.score, 0) / psychometricAnswers.length)
      : 0;
    
    const technicalScore = technicalAnswers.length > 0 
      ? Math.round(technicalAnswers.reduce((sum, a) => sum + a.score, 0) / technicalAnswers.length)
      : 0;
    
    const wiscarScore = wiscarAnswers.length > 0 
      ? Math.round(wiscarAnswers.reduce((sum, a) => sum + a.score, 0) / wiscarAnswers.length)
      : 0;

    const overallScore = Math.round((psychometricScore + technicalScore + wiscarScore) / 3);

    return {
      psychometric: psychometricScore,
      technical: technicalScore,
      wiscar: wiscarScore,
      overall: overallScore
    };
  };

  const handleRestart = () => {
    setPhase('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  if (phase === 'intro') {
    return <AssessmentIntro onStartAssessment={handleStartAssessment} />;
  }

  if (phase === 'results') {
    const scores = calculateScores();
    return <AssessmentResults scores={scores} onRestart={handleRestart} />;
  }

  const currentQuestion = assessmentQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <ProgressTracker 
          currentStep={currentStep} 
          totalSteps={4} 
          sections={sections} 
        />
        
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          onNext={handleNextQuestion}
          isLast={currentQuestionIndex === assessmentQuestions.length - 1}
        />

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {assessmentQuestions.length}
        </div>
      </div>
    </div>
  );
};