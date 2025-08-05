import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, TrendingUp, Lightbulb } from "lucide-react";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

export const AssessmentIntro = ({ onStartAssessment }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Is Product Management Right for You?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover your fit, readiness, and growth path in Product Management through our comprehensive AI-driven assessment
          </p>
        </div>

        {/* What is PM Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-accent" />
              What is Product Management?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-6">
              Product Management is the strategic function that connects user needs, business goals, and technical implementation. 
              PMs drive product vision, prioritize features, coordinate teams, and ensure successful delivery.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Typical Career Paths</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Associate Product Manager (APM)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Product Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Technical Product Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Growth Product Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Head of Product
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Key Success Traits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    Strategic Thinking & Decision-Making
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    Empathy & Customer-Centric Mindset
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    Cross-Functional Communication
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    Data-Driven Mindset
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    Leadership without Authority
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Overview */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Assessment Overview</CardTitle>
            <CardDescription>
              Our comprehensive evaluation covers 4 key areas to determine your PM readiness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                  1
                </div>
                <h4 className="font-semibold mb-2">Psychometric</h4>
                <p className="text-sm text-muted-foreground">Personality, interests, and motivation alignment</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                  2
                </div>
                <h4 className="font-semibold mb-2">Technical</h4>
                <p className="text-sm text-muted-foreground">Cognitive readiness and technical baseline</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-success/5 to-success/10 rounded-lg">
                <div className="w-12 h-12 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                  3
                </div>
                <h4 className="font-semibold mb-2">WISCAR</h4>
                <p className="text-sm text-muted-foreground">Will, Interest, Skill, Cognitive ability, Ability to learn, Real-world alignment</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-warning/5 to-warning/10 rounded-lg">
                <div className="w-12 h-12 bg-warning text-warning-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                  4
                </div>
                <h4 className="font-semibold mb-2">Recommendations</h4>
                <p className="text-sm text-muted-foreground">Personalized career guidance and next steps</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                ⏱️ Duration: 20-30 minutes | 📊 Scientifically validated frameworks | 🎯 Personalized results
              </p>
              
              <Button 
                size="lg" 
                onClick={onStartAssessment}
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-lg px-8 py-3"
              >
                Start Your Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};