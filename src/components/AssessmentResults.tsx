import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScoreGauge } from "./ScoreGauge";
import { ResultsRadarChart } from "./ResultsRadarChart";
import { CheckCircle, XCircle, AlertCircle, BookOpen, TrendingUp, Users, Target } from "lucide-react";

interface AssessmentResultsProps {
  scores: {
    psychometric: number;
    technical: number;
    wiscar: number;
    overall: number;
  };
  onRestart: () => void;
}

export const AssessmentResults = ({ scores, onRestart }: AssessmentResultsProps) => {
  const getRecommendation = () => {
    const { psychometric, technical, wiscar, overall } = scores;
    
    if (overall >= 70 && psychometric >= 70 && technical >= 60) {
      return {
        decision: "Yes",
        icon: CheckCircle,
        color: "text-success",
        bgColor: "bg-success/10",
        title: "Product Management is a Great Fit!",
        description: "You show strong alignment with PM requirements across all key areas."
      };
    } else if (overall >= 50 && psychometric >= 60) {
      return {
        decision: "Maybe",
        icon: AlertCircle,
        color: "text-warning",
        bgColor: "bg-warning/10",
        title: "Product Management Could Work with Development",
        description: "You have potential but should focus on strengthening specific areas."
      };
    } else {
      return {
        decision: "Not Yet",
        icon: XCircle,
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        title: "Consider Alternative Paths First",
        description: "You might find better alignment with related roles while building PM skills."
      };
    }
  };

  const recommendation = getRecommendation();
  const RecommendationIcon = recommendation.icon;

  const radarData = [
    {
      category: "Will",
      score: scores.wiscar,
      fullMark: 100
    },
    {
      category: "Interest",
      score: scores.psychometric,
      fullMark: 100
    },
    {
      category: "Skills",
      score: (scores.wiscar + scores.technical) / 2,
      fullMark: 100
    },
    {
      category: "Cognitive",
      score: scores.technical,
      fullMark: 100
    },
    {
      category: "Learning",
      score: scores.wiscar,
      fullMark: 100
    },
    {
      category: "Reality",
      score: scores.technical,
      fullMark: 100
    }
  ];

  const getNextSteps = () => {
    if (recommendation.decision === "Yes") {
      return [
        "🎯 Start building a product portfolio with side projects",
        "📚 Read 'Inspired' by Marty Cagan and 'Cracking the PM Interview'",
        "🤝 Network with current PMs on LinkedIn",
        "💼 Apply for APM programs or entry-level PM roles",
        "📊 Learn SQL and basic data analysis"
      ];
    } else if (recommendation.decision === "Maybe") {
      return [
        "🎓 Take a product management course (Coursera, Udemy)",
        "📈 Strengthen your weakest areas from the assessment",
        "🛠️ Learn Agile/Scrum methodology",
        "📊 Practice with product case studies",
        "🔄 Retake this assessment in 3-6 months"
      ];
    } else {
      return [
        "🔍 Consider Business Analyst or Project Manager roles",
        "🎨 Explore UX/UI Design if you scored high on creativity",
        "📊 Look into Data Analysis if you enjoy numbers",
        "🚀 Build foundational business and tech skills",
        "📚 Learn about product management through free resources"
      ];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Your Assessment Results</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive analysis of your Product Management readiness
          </p>
        </div>

        {/* Main Recommendation */}
        <Card className={`mb-8 shadow-lg border-l-4 ${recommendation.color} ${recommendation.bgColor}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <RecommendationIcon className={`h-8 w-8 ${recommendation.color}`} />
              {recommendation.title}
            </CardTitle>
            <CardDescription className="text-lg">
              {recommendation.description}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Score Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ScoreGauge score={scores.overall} label="Overall Fit" size="lg" />
          <ScoreGauge score={scores.psychometric} label="Psychological Fit" />
          <ScoreGauge score={scores.technical} label="Technical Readiness" />
          <ScoreGauge score={scores.wiscar} label="WISCAR Score" />
        </div>

        {/* Detailed Analysis */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>WISCAR Analysis</CardTitle>
              <CardDescription>
                Your readiness across six key dimensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResultsRadarChart data={radarData} />
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Recommended Next Steps</CardTitle>
              <CardDescription>
                Based on your assessment results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {getNextSteps().map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Career Paths */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Recommended Career Paths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendation.decision === "Yes" && (
                <>
                  <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                    <Target className="h-8 w-8 text-success mb-2" />
                    <h4 className="font-semibold mb-2">Product Manager</h4>
                    <p className="text-sm text-muted-foreground">Drive product strategy and work with cross-functional teams</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold mb-2">Technical PM</h4>
                    <p className="text-sm text-muted-foreground">Bridge technical and business requirements</p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <Users className="h-8 w-8 text-accent mb-2" />
                    <h4 className="font-semibold mb-2">Associate PM</h4>
                    <p className="text-sm text-muted-foreground">Entry-level role to start your PM journey</p>
                  </div>
                </>
              )}
              
              {recommendation.decision === "Maybe" && (
                <>
                  <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
                    <BookOpen className="h-8 w-8 text-warning mb-2" />
                    <h4 className="font-semibold mb-2">Business Analyst</h4>
                    <p className="text-sm text-muted-foreground">Build analytical skills while learning product thinking</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Target className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold mb-2">Product Owner</h4>
                    <p className="text-sm text-muted-foreground">Focus on Agile product delivery</p>
                  </div>
                </>
              )}
              
              {recommendation.decision === "Not Yet" && (
                <>
                  <div className="p-4 bg-secondary rounded-lg border">
                    <BookOpen className="h-8 w-8 text-muted-foreground mb-2" />
                    <h4 className="font-semibold mb-2">Business Analyst</h4>
                    <p className="text-sm text-muted-foreground">Develop analytical and business skills</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg border">
                    <Users className="h-8 w-8 text-muted-foreground mb-2" />
                    <h4 className="font-semibold mb-2">Project Manager</h4>
                    <p className="text-sm text-muted-foreground">Build leadership and coordination skills</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="mr-4"
          >
            Retake Assessment
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow"
          >
            Download Full Report
          </Button>
        </div>
      </div>
    </div>
  );
};