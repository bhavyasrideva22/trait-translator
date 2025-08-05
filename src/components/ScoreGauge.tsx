interface ScoreGaugeProps {
  score: number;
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ScoreGauge = ({ score, label, size = 'md' }: ScoreGaugeProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-assessment-excellent';
    if (score >= 60) return 'text-assessment-good';
    if (score >= 40) return 'text-assessment-moderate';
    return 'text-assessment-poor';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-assessment-excellent';
    if (score >= 60) return 'bg-assessment-good';
    if (score >= 40) return 'bg-assessment-moderate';
    return 'bg-assessment-poor';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Moderate';
    return 'Needs Work';
  };

  const sizeClasses = {
    sm: 'w-16 h-16 text-sm',
    md: 'w-24 h-24 text-lg',
    lg: 'w-32 h-32 text-2xl'
  };

  const strokeWidth = size === 'sm' ? 4 : size === 'md' ? 6 : 8;
  const radius = size === 'sm' ? 24 : size === 'md' ? 40 : 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative">
        <svg className={`${sizeClasses[size]} transform -rotate-90`}>
          {/* Background circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={`transition-all duration-1000 ease-out ${getScoreColor(score)}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-bold ${getScoreColor(score)} ${
            size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-3xl'
          }`}>
            {score}
          </span>
          <span className="text-xs text-muted-foreground">%</span>
        </div>
      </div>
      
      <div className="text-center">
        <p className="font-medium text-sm">{label}</p>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getScoreBg(score)} text-white`}>
          {getScoreLabel(score)}
        </span>
      </div>
    </div>
  );
};