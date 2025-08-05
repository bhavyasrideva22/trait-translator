import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

interface RadarChartProps {
  data: {
    category: string;
    score: number;
    fullMark: number;
  }[];
}

export const ResultsRadarChart = ({ data }: RadarChartProps) => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis 
            dataKey="category" 
            tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
          />
          <Radar
            name="Score"
            dataKey="score"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};